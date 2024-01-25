import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import { useNavigate } from 'react-router-dom';
import Starfield from '../../components/Starfield';
import FileTreeItem from '../../components/FileTreeItem';

const style = {
    container: {
        padding: '3rem',
        color: '#E0E0E0',
        backgroundColor: '#1C1C1E',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        '@media (max-width: 600px)': {
            maxWidth: '100%',
            padding: '1rem',
        },
    },
    header: {
        marginBottom: '2rem',
        textAlign: 'center',
        fontSize: '2rem',
        color: '#FFFFFF',
    },
    paragraph: {
        marginBottom: '1rem',
        textAlign: 'left',
        lineHeight: '1.6',
    },
    featureBox: {
        marginTop: '4rem',
        textAlign: 'left',
    },
    featureHeading: {
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    backButton: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1,
    },
    codeSnippet: {
        backgroundColor: '#333',
        color: '#ddd',
        padding: '1rem',
        borderRadius: '8px',
    },
    link: {
        color: '#0a84ff',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    }
};

const filesData = [
    {
        name: "BattleShipAPI.java",
        code: `package BattleShipAPI;

        import java.awt.Point;
        import java.util.ArrayList;
        import java.util.Iterator;
        import java.util.Random;
        
        public class BattleShipAPI {
            private static final boolean DEBUGMODE = false;
            public static final int BOARD_SIZE = 10;
            public static final int[] SHIP_SIZES = new int[]{5, 4, 3, 2, 2, 1, 1};
            private int numberOfGames;
            private int boardSize;
            private boolean success;
            private int[] shipSizes;
            private CellState[][] board;
            private ArrayList<Ship> ships;
            private ArrayList<Point> hits;
            private ArrayList<Point> misses;
            private Random random = new Random(-1412567296L);
            private int totalShots;
            private long timeRequired;
            private BattleShipBot bot;
        
            public static String getVersion() {
                return "B A T T L E S H I P - Version 3.0 [January 23,2024]";
            }
        
            public BattleShipAPI(int numberOfGames, BattleShipBot bot) {
                this.bot = bot;
                this.numberOfGames = numberOfGames;
                this.success = false;
                this.boardSize = 10;
                this.reset();
                bot.initialize(this);
            }
        
            public int[] run() {
                long start = System.nanoTime();
                this.totalShots = 0;
                int[] gameScores = new int[this.numberOfGames];
                this.success = false;
        
                try {
                    for(int game = 0; game < this.numberOfGames; ++game) {
                        this.reset();
                        this.bot.initialize(this);
        
                        while(!this.allSunk()) {
                            this.bot.fireShot();
                        }
        
                        int gameShots = this.totalShotsTaken();
                        gameScores[game] = gameShots;
                        this.totalShots += gameShots;
                        this.success = true;
                    }
                } catch (Exception var6) {
                    System.out.println("RUNNING of Solution Failed " + this.bot.getClass());
                    System.out.println(var6.getMessage());
                    var6.printStackTrace();
                }
        
                this.timeRequired = (System.nanoTime() - start) / 1000000L;
                return gameScores;
            }
        
            public void reportResults() {
                System.out.println("------------------------------------------------------------");
                System.out.printf("BattleShip 2 - Results for %s\n", this.bot.getClass().getName());
                System.out.println("Author : " + this.bot.getAuthors());
                System.out.println("------------------------------------------------------------");
                if (this.success) {
                    System.out.printf("The Average Score over %d games    = %.2f\n", this.numberOfGames, (double)this.totalShots / (double)this.numberOfGames);
                    System.out.printf("Time required to complete %d games = %d ms\n", this.numberOfGames, this.timeRequired);
                } else {
                    System.out.println("Solution did not complete - Exception thrown in code");
                }
        
                System.out.println("------------------------------------------------------------");
            }
        
            private void reset() {
                this.hits = new ArrayList();
                this.misses = new ArrayList();
                this.shipSizes = SHIP_SIZES;
                this.board = new CellState[this.boardSize][this.boardSize];
        
                int i;
                for(i = 0; i < this.boardSize; ++i) {
                    for(int y = 0; y < this.boardSize; ++y) {
                        this.board[i][y] = CellState.Empty;
                    }
                }
        
                this.ships = new ArrayList();
        
                for(i = 0; i < this.shipSizes.length; ++i) {
                    Ship testShip = null;
        
                    do {
                        Point location = new Point(this.random.nextInt(this.boardSize), this.random.nextInt(this.boardSize));
                        ShipOrientation orientation = ShipOrientation.values()[this.random.nextInt(ShipOrientation.values().length)];
                        testShip = new Ship(this.shipSizes[i], location, orientation);
                        boolean placed = Ship.place(this.boardSize, testShip, this.ships);
                        if (placed) {
                        }
                    } while(!testShip.getIsPlaced());
        
                    this.ships.add(testShip);
                }
        
            }
        
            public boolean allSunk() {
                int numberOfHitCells = 0;
        
                for(int y = 0; y < this.boardSize; ++y) {
                    for(int x = 0; x < this.boardSize; ++x) {
                        if (this.board[x][y] == CellState.Hit) {
                            ++numberOfHitCells;
                        }
                    }
                }
        
                return numberOfHitCells == this.totalShipLengths();
            }
        
            public int totalShotsTaken() {
                return this.hits.size() + this.misses.size();
            }
        
            public int[] getShipSizes() {
                return this.shipSizes;
            }
        
            public boolean shoot(Point shot) {
                boolean hit = this.shipAt(shot);
                if (hit) {
                    this.board[shot.x][shot.y] = CellState.Hit;
                    this.hits.add(shot);
                } else {
                    this.board[shot.x][shot.y] = CellState.Miss;
                    this.misses.add(shot);
                }
        
                return this.shipAt(shot);
            }
        
            public int numberOfShipsSunk() {
                int num = 0;
                Iterator var2 = this.ships.iterator();
        
                while(var2.hasNext()) {
                    Ship s = (Ship)var2.next();
                    int length = s.getLength();
                    Point pos = s.getLocation();
                    boolean sunk = true;
                    int y;
                    if (s.getOrientation() == ShipOrientation.Horizontal) {
                        for(y = 0; y < length; ++y) {
                            sunk &= this.board[pos.x + y][pos.y] == CellState.Hit;
                        }
                    } else {
                        for(y = 0; y < length; ++y) {
                            sunk &= this.board[pos.x][pos.y + y] == CellState.Hit;
                        }
                    }
        
                    if (sunk) {
                        ++num;
                    }
                }
        
                return num;
            }
        
            private boolean shipAt(Point p) {
                Iterator var2 = this.ships.iterator();
        
                Ship s;
                do {
                    if (!var2.hasNext()) {
                        return false;
                    }
        
                    s = (Ship)var2.next();
                } while(!s.isAt(p));
        
                return true;
            }
        
            private void printBoard() {
                System.out.print("\n.  ");
        
                int y;
                for(y = 0; y < this.boardSize; ++y) {
                    System.out.printf("%2d ", y);
                }
        
                for(y = 0; y < this.boardSize; ++y) {
                    System.out.printf("\n%2d ", y);
        
                    for(int x = 0; x < this.boardSize; ++x) {
                        System.out.printf(" %s ", this.board[x][y]);
                    }
                }
        
                System.out.println();
            }
        
            private void debugPrintBoard() {
                CellState[][] dboard = new CellState[this.boardSize][this.boardSize];
        
                int y;
                int x;
                for(y = 0; y < this.boardSize; ++y) {
                    for(x = 0; x < this.boardSize; ++x) {
                        if (this.shipAt(new Point(y, x))) {
                            dboard[y][x] = CellState.Hit;
                        } else {
                            dboard[y][x] = CellState.Empty;
                        }
                    }
                }
        
                System.out.print("\n.  ");
        
                for(y = 0; y < this.boardSize; ++y) {
                    System.out.printf("%2d ", y);
                }
        
                for(y = 0; y < this.boardSize; ++y) {
                    System.out.printf("\n%2d ", y);
        
                    for(x = 0; x < this.boardSize; ++x) {
                        System.out.printf(" %s ", dboard[x][y]);
                    }
                }
        
                System.out.println();
            }
        
            private int totalShipLengths() {
                int length = 0;
        
                Ship s;
                for(Iterator var2 = this.ships.iterator(); var2.hasNext(); length += s.getLength()) {
                    s = (Ship)var2.next();
                }
        
                return length;
            }
        
            public static void main(String[] args) {
                System.out.println(getVersion());
            }
        }`,
    },
    {
        name: "BattleShipBot.java",
        code: `package BattleShipAPI;

        public interface BattleShipBot {
            void initialize(BattleShipAPI var1);
        
            void fireShot();
        
            String getAuthors();
        }`,
    },
   {
        name: "CellState.java",
        code: `package BattleShipAPI;

        public enum CellState {
            Empty,
            Hit,
            Miss;
        
            private CellState() {
            }
        
            public String toString() {
                switch (this) {
                    case Empty:
                        return ".";
                    case Hit:
                        return "X";
                    case Miss:
                        return "o";
                    default:
                        return "?";
                }
            }
        }`,
   },
   {
        name: "Ship.java",
        code: `package BattleShipAPI;

        import java.awt.Point;
        import java.util.ArrayList;
        import java.util.Iterator;
        
        public final class Ship {
            private boolean isPlaced = false;
            private Point location;
            private ShipOrientation orientation;
            private int length;
        
            public Ship(int length, Point location, ShipOrientation orientation) {
                if (length <= 0) {
                    throw new IllegalArgumentException("Invalid length specified: must be >= 1 ");
                } else {
                    this.length = length;
                    this.location = location;
                    this.orientation = orientation;
                }
            }
        
            public boolean getIsPlaced() {
                return this.isPlaced;
            }
        
            public Point getLocation() {
                return this.location;
            }
        
            public ShipOrientation getOrientation() {
                return this.orientation;
            }
        
            public int getLength() {
                return this.length;
            }
        
            public static boolean place(int boardSize, Ship newShip, ArrayList<Ship> ships) {
                newShip.isPlaced = false;
                if (!newShip.isValid(boardSize)) {
                    return false;
                } else {
                    if (ships != null) {
                        Iterator var3 = ships.iterator();
        
                        label97:
                        while(true) {
                            while(true) {
                                if (!var3.hasNext()) {
                                    break label97;
                                }
        
                                Ship ship = (Ship)var3.next();
                                int x;
                                int y;
                                if (ship.orientation == ShipOrientation.Horizontal) {
                                    x = ship.getLocation().y;
        
                                    for(y = ship.getLocation().x; y < ship.getLocation().x + ship.getLength(); ++y) {
                                        if (y == ship.getLocation().x && y > 0 && newShip.isAt(new Point(y - 1, x))) {
                                            return false;
                                        }
        
                                        if (y == ship.getLocation().x + ship.getLength() - 1 && y < boardSize - 1 && newShip.isAt(new Point(y + 1, x))) {
                                            return false;
                                        }
        
                                        if (newShip.isAt(new Point(y, x)) || newShip.isAt(new Point(y, Math.max(0, x - 1))) || newShip.isAt(new Point(y, Math.min(boardSize - 1, x + 1)))) {
                                            return false;
                                        }
                                    }
                                } else if (ship.orientation == ShipOrientation.Vertical) {
                                    x = ship.getLocation().x;
        
                                    for(y = ship.getLocation().y; y < ship.getLocation().y + ship.getLength(); ++y) {
                                        if (y == ship.getLocation().y && y > 0 && newShip.isAt(new Point(x, y - 1))) {
                                            return false;
                                        }
        
                                        if (y == ship.getLocation().y + ship.getLength() - 1 && y < boardSize - 1 && newShip.isAt(new Point(x, y + 1))) {
                                            return false;
                                        }
        
                                        if (newShip.isAt(new Point(x, y)) || newShip.isAt(new Point(Math.max(0, x - 1), y)) || newShip.isAt(new Point(Math.min(boardSize - 1, x + 1), y))) {
                                            return false;
                                        }
                                    }
                                }
                            }
                        }
                    }
        
                    newShip.isPlaced = true;
                    return true;
                }
            }
        
            public boolean isAt(Point p) {
                if (this.getOrientation() == ShipOrientation.Horizontal) {
                    return p.y == this.location.y && p.x >= this.location.x && p.x < this.location.x + this.length;
                } else {
                    return p.x == this.location.x && p.y >= this.location.y && p.y < this.location.y + this.length;
                }
            }
        
            public boolean isValid(int boardSize) {
                if (this.location.x >= 0 && this.location.y >= 0) {
                    if (this.orientation == ShipOrientation.Horizontal) {
                        if (this.location.y >= boardSize || this.location.x + this.length > boardSize) {
                            return false;
                        }
                    } else if (this.location.x >= boardSize || this.location.y + this.length > boardSize) {
                        return false;
                    }
        
                    return true;
                } else {
                    return false;
                }
            }
        }`,
   },
];



const BattleShipBot = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <Box sx={style.container}>
            <Starfield />
            <IconButton onClick={handleBack} sx={style.backButton}>
                <ArrowBackIcon />
            </IconButton>

            <Grid container spacing={2}>
                <ProjectOverview />
                <YourApproach />
                <TechnicalImplementation />
                <Results />
                <LearningsReflections />
                <CodeAccessibility />
                <ContactInformation />
            </Grid>

            <LandscapeOverlay />
        </Box>
    );
};

const ProjectOverview = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2" sx={style.header}><br></br><br></br>
                Battleship Strategy Bot
            </Typography>
            <Typography variant="body1" sx={style.paragraph}>
                The BattleShipBot, is an advanced Battleship game bot designed to play against an opponent with strategic precision.
                This bot utilizes a unique combination of probabilistic and targeted strategies to enhance its gameplay, aiming to achieve the
                lowest average number of shots across multiple games on a 10x10 grid.
            </Typography>
            <Typography variant="body1" sx={style.paragraph}>
                Objective: Minimize the number of shots required to sink all enemy ships across 10,000 games.
            </Typography>
        </Grid>
    );
}

const YourApproach = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>My Approach</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                BattleShipBot implements a hybrid strategy, integrating both probabilistic and targeted approaches.
                It leverages historical data to make educated guesses in the early game and switches to a
                more focused approach once a ship is hit, targeting specific areas to effectively sink ships.
            </Typography>
            <Typography variant="body1" sx={style.paragraph}>
                The bot employs arrays, sets, maps, and priority queues to manage the game state, track ship placements,
                and calculate shot probabilities. This selection of data structures ensures efficient data management
                and optimal decision-making during gameplay.
            </Typography>
        </Grid>
    );
}

const TechnicalImplementation = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Technical Implementation</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                One challenge was efficiently managing the probabilistic calculations for shot selection.
                This was solved by using a priority queue to rank cells based on their likelihood of containing a ship,
                significantly optimizing the shot selection process.
                <div>
                    {filesData.map((fileData) => (
                        <FileTreeItem key={fileData.name} fileName={fileData.name} codeSnippet={fileData.code} />
                    ))}
                </div>
            </Typography>
        </Grid>
    );
}

const Results = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Results</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                The BattleShip bot achieved an impressive average shot count well below the goal target, showcasing its
                effectiveness in strategically playing Battleship. The precise combination of algorithms and data
                structures played a pivotal role in this achievement.
            </Typography>
        </Grid>
    );
}

const LearningsReflections = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Learnings and Reflections</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                This project enhanced my understanding of algorithm efficiency and data structure selection.
                The importance of choosing the right strategy based on game context was a key takeaway,
                offering insights into adaptive algorithm design.
            </Typography>
        </Grid>
    );
}

const CodeAccessibility = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Code Accessibility</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                <a href="https://github.com/yourusername/titanbot" style={{ color: '#0a84ff' }}>
                    View the full code on GitHub
                </a>
            </Typography>
        </Grid>
    );
}

const ContactInformation = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4" sx={style.featureHeading}>Contact Information</Typography>
            <Typography variant="body1" sx={style.paragraph}>
                Anthony Mercadante - Software Development Student<br />
                Email: Anthony.Mercadante@ProtonMail.com
            </Typography>
        </Grid>
    );
}

export default BattleShipBot;
