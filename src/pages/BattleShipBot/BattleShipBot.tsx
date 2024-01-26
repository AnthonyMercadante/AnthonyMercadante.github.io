import React from 'react';
import { Box, Typography, IconButton, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LandscapeOverlay from '../../components/LandscapeOverlay';
import { useNavigate } from 'react-router-dom';
import Starfield from '../../components/Starfield';
import FileTreeItem from '../../components/FileTreeItem';
import GetAppIcon from '@mui/icons-material/GetApp';

const style = {
    container: {
        padding: '3rem',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: '#E0E0E0',
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
        fontSize: '.1rem',
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
        name: "BattleShip",
        code: `import BattleShipAPI.BattleShipAPI;
        public class BattleShip {
            public static void main(String[] args) {
        
        
                final int NUMBEROFGAMES = 10000;
                System.out.println(BattleShipAPI.getVersion());
                BattleShipAPI battleShip = new BattleShipAPI(NUMBEROFGAMES, new BattleShipAI());
                int [] gameResults = battleShip.run();
        
                battleShip.reportResults();
            }
        }`,
    },
    {
        name: "BattleShipAI",
        code: `import BattleShipAPI.*;

        import java.awt.Point;
        import java.util.*;
        
        /**
         * BattleShipAI is an implementation of a Battleship game bot.
         * It uses a combination of probabilistic and targeted strategies
         * to play Battleship against an opponent.
         *
         * @author - Anthony Mercadante
         * Notes:
         */
        public class BattleShipAI implements BattleShipBot {
            private int gameSize;  // Size of the game board (number of cells in one dimension)
            private BattleShipAPI battleShip;  // Instance of the battleship game interface
            private Random random;  // Random number generator for making random decisions
            private CellState[][] board;  // Representation of the game board's current state
            private boolean targetMode;  // Flag to indicate whether the bot is in target mode (targeting a specific ship)
            private Point lastHit;  // The last successful hit coordinate
            private Map<Point, Double> probabilityMap;  // Map to hold the probability of each cell containing a ship
            private int[] initialShipSizes;  // Array holding the initial sizes of the ships
            private Set<Integer> sunkShipSizes;  // Set of sizes of ships that have been sunk
            private final List<Point> hitList = new ArrayList<>();  // List of points where the bot has successfully hit ships
            private Boolean shipOrientation;  // Current assumption of the target ship's orientation (null if unknown)
            private boolean[][] impossibleCells;  // Grid to mark cells where ships cannot possibly be located
            private boolean[][] potentialCells;  // Grid to mark cells with potential to have ships based on game logic
            private Map<Point, Set<Point>> shipGraph;  // Graph representing connections between hit cells on a ship
            private PriorityQueue<CellProbability> probabilityQueue;  // Priority queue to manage cells based on their hit probability
            private int[][] shipPlacementFrequency;  // Grid to track the frequency of ship placement in each cell across games
        
        
            /**
             * Initializes the TitanBot with the given BattleShip2 game instance.
             * This method sets up the initial game state, including the game board,
             * probability structures, and other strategic elements.
             *
             * @param b The BattleShip2 game instance that this bot will be playing.
             */
            @Override
            public void initialize(BattleShipAPI b) {
                battleShip = b;  // Sets the current BattleShip2 instance
                gameSize = BattleShipAPI.BOARD_SIZE;  // Initializes the size of the game board
                random = new Random(0xAAAAAAAA);  // Initializes the random number generator with a seed
        
                // Initialize the board state to empty
                board = new CellState[gameSize][gameSize];
                for (int i = 0; i < gameSize; i++) {
                    for (int j = 0; j < gameSize; j++) {
                        board[i][j] = CellState.Empty;
                    }
                }
        
                probabilityMap = new HashMap<>();  // Initializes the map for storing cell probabilities
                sunkShipSizes = new HashSet<>();   // Initializes the set to track sizes of sunk ships
        
                // Initialize other strategic elements
                targetMode = false;  // Initially not in target mode
                lastHit = null;  // No last hit at the start
                initialShipSizes = b.getShipSizes();  // Stores the initial sizes of the ships in the game
                impossibleCells = new boolean[gameSize][gameSize];  // Grid to mark cells where ships cannot be located
                potentialCells = new boolean[gameSize][gameSize];  // Grid to mark potential cells for ships
                probabilityQueue = new PriorityQueue<>();  // Priority queue for managing cells based on probability
                shipGraph = new HashMap<>();  // Graph to connect hits on the same ship
                shipPlacementFrequency = new int[gameSize][gameSize]; // Tracks ship placement frequency across games
            }
        
        
        
            /**
             * Executes a firing action in the Battleship game.
             * This method decides the next shot based on the current game state,
             * utilizing different strategies depending on whether it's early in the game,
             * in target mode (focusing on a specific ship), or otherwise.
             * It updates the game state based on the shot's outcome.
             */
            @Override
            public void fireShot() {
                // Update the status of sunk ships and the probability map for the board
                updateSunkShips();
                updateProbabilityMap();
        
                Point shot;
        
                // Determine the next shot based on game phase and mode
                if (isEarlyGame()) {
                    // Use a probabilistic approach in the early game, considering historical data
                    shot = getNextProbabilisticShot();
                } else if (targetMode) {
                    // In target mode, focus on sinking the currently targeted ship
                    shot = getNextTargetShot();
                } else {
                    // Default to a targeted shot strategy outside early game and not in target mode
                    shot = getTargetedShot();
                }
        
                // Fire the shot and update the board state based on the result
                boolean hit = battleShip.shoot(shot);
                board[shot.x][shot.y] = hit ? CellState.Hit : CellState.Miss;
        
                // Handle the outcome of the shot
                if (hit) {
                    // If a hit, add to hit list, update target mode and related strategies
                    hitList.add(shot);
                    lastHit = shot;
                    targetMode = true;
                    updateTargetMode();
                    updateShipGraph(shot);
                } else if (targetMode && shipOrientation != null) {
                    // Reset target mode if in target mode but the shot was a miss
                    resetTargetMode();
                }
        
                // If any ships were sunk, update probability and reset target mode
                if (battleShip.numberOfShipsSunk() > 0) {
                    updateProbabilityAfterSinking();
                    resetTargetMode();
                }
            }
        
        
            /**
             * Returns the author information of this BattleShipAI class.
             * This method is used to identify the creator of the bot.
             *
             * @return A string containing the name of the author and their designation.
             */
            @Override
            public String getAuthors() {
                return "Anthony Mercadante (Software Development Student)";
            }
        
        
        
            /**
             * Determines the next shot using a probabilistic approach based on the frequency of ship placements.
             * This method iterates over the game board and selects the cell with the highest frequency of having a ship
             * based on historical data. If no such cell is found, it defaults to a random shot.
             *
             * @return The point (coordinates) on the board where the next shot is to be fired.
             */
            private Point getNextProbabilisticShot() {
                // Use shipPlacementFrequency to adjust your shot selection
                Point selectedShot = null;
                int maxFrequency = 0;
                for (int x = 0; x < gameSize; x++) {
                    for (int y = 0; y < gameSize; y++) {
                        if (board[x][y] == CellState.Empty && shipPlacementFrequency[x][y] > maxFrequency) {
                            maxFrequency = shipPlacementFrequency[x][y];
                            selectedShot = new Point(x, y);
                        }
                    }
                }
                // Returns the most probable shot; if none is found, defaults to a random shot
                return selectedShot != null ? selectedShot : randomShot();
            }
        
        
        
            /**
             * Updates the ship graph based on the latest hit.
             * This method adds the hit point to the ship graph and establishes connections to adjacent hits,
             * effectively mapping the parts of a ship that have been hit. This graph aids in tracking the hit
             * sections of ships and determining their orientation.
             *
             * @param hit The point on the board where the latest hit occurred.
             */
            private void updateShipGraph(Point hit) {
                // Add the hit point to the graph with an empty set of connections if not already present
                shipGraph.putIfAbsent(hit, new HashSet<>());
        
                // Directions to check for adjacent hits: Up, Down, Left, Right
                int[][] directions = {{0, 1}, {0, -1}, {-1, 0}, {1, 0}};
        
                for (int[] dir : directions) {
                    int adjacentRow = hit.x + dir[0];
                    int adjacentCol = hit.y + dir[1];
                    Point adjacentPoint = new Point(adjacentRow, adjacentCol);
        
                    // Check if the adjacent cell is a hit and within the board bounds
                    if (isValidCoordinate(adjacentRow, adjacentCol) && board[adjacentRow][adjacentCol] == CellState.Hit) {
                        // Connect the current hit with the adjacent hit in the graph
                        shipGraph.get(hit).add(adjacentPoint);
        
                        // Also connect the adjacent hit with the current hit
                        shipGraph.putIfAbsent(adjacentPoint, new HashSet<>());
                        shipGraph.get(adjacentPoint).add(hit);
                    }
                }
            }
        
        
            /**
             * Checks if the given row and column coordinates are valid within the game board.
             * A coordinate is considered valid if it lies within the bounds of the game board,
             * which is determined by the gameSize.
             *
             * @param row The row coordinate to be checked.
             * @param col The column coordinate to be checked.
             * @return true if the coordinate is within the game board; false otherwise.
             */
            private boolean isValidCoordinate(int row, int col) {
                // Check if both row and column are within the bounds of the game board
                return row >= 0 && row < gameSize && col >= 0 && col < gameSize;
            }
        
        
        
            /**
             * Updates the record of sunk ships based on the current state of the game.
             * This method compares the initial ship sizes with the current ship sizes
             * reported by the game. If a ship size from the initial list is no longer
             * present in the current game state, it is marked as sunk.
             */
            private void updateSunkShips() {
                // Fetch the current sizes of ships remaining in the game
                int[] currentShipSizes = battleShip.getShipSizes();
        
                // Iterate through the initial sizes of ships
                for (int size : initialShipSizes) {
                    // If a size from the initial list is not in the current list, it's sunk
                    if (arrayDoesNotContain(currentShipSizes, size)) {
                        sunkShipSizes.add(size);  // Mark the ship size as sunk
                    }
                }
            }
        
        
            /**
             * Checks if the provided array does not contain the specified value.
             * This utility method iterates through the array and compares each element
             * to the given value. It is primarily used to determine if a ship of a certain size
             * has been sunk by checking against the current array of ship sizes.
             *
             * @param array The array of integers to be checked.
             * @param value The value to check for in the array.
             * @return true if the value is not found in the array; false otherwise.
             */
            private boolean arrayDoesNotContain(int[] array, int value) {
                // Iterate through each element in the array
                for (int i : array) {
                    // If the current element equals the value, return false (value is found)
                    if (i == value) {
                        return false;
                    }
                }
                // Return true if the value is not found in the array
                return true;
            }
        
        
        
            /**
             * Determines the next shot in target mode, focusing on sinking a specific ship.
             * This method first updates the ship's orientation based on recent hits. If the orientation
             * is known, it attempts to get the next shot inline with the identified orientation. If the orientation
             * is unknown or the next inline shot is not valid, it selects a high-probability shot around the last hit.
             * As a fallback, it resorts to a random shot if no suitable target is identified.
             *
             * @return The point (coordinates) on the board where the next shot is to be fired.
             */
            private Point getNextTargetShot() {
                // Update the orientation of the target ship based on recent hits
                updateShipOrientationBasedOnHits();
        
                // Attempt to get the next shot inline with the ship's orientation, if known
                Point nextShot = (shipOrientation != null) ? getNextShotInLineBasedOnOrientation() : null;
        
                // If inline shot is not valid or orientation is unknown, prioritize high-probability cells around the last hit
                if (nextShot == null || !isValidShot(nextShot)) {
                    nextShot = getHighProbabilityShotAroundLastHit();
                }
        
                // Fallback to a random shot if no suitable shot is identified
                return (nextShot != null && isValidShot(nextShot)) ? nextShot : randomShot();
            }
        
        
            /**
             * Selects the high probability shot around the last hit point.
             * This method identifies potential target points adjacent to the last hit and
             * evaluates their probability of containing a ship. The method selects the point
             * with the highest probability as the next shot, considering only valid shots.
             * It is used when the bot is in target mode and looking to efficiently sink a ship.
             *
             * @return The point with the highest probability around the last hit, or null if no valid targets are found.
             */
            private Point getHighProbabilityShotAroundLastHit() {
                // Return null if there hasn't been a hit yet
                if (lastHit == null) return null;
        
                // Get a list of points adjacent to the last hit
                List<Point> potentialTargets = getAdjacentPoints(lastHit);
                double maxProbability = 0.0;
                Point bestShot = null;
        
                // Iterate through potential targets to find the one with the highest probability
                for (Point target : potentialTargets) {
                    double prob = probabilityMap.getOrDefault(target, 0.0);
                    // Update the best shot if the current target has a higher probability and is a valid shot
                    if (prob > maxProbability && isValidShot(target)) {
                        maxProbability = prob;
                        bestShot = target;
                    }
                }
        
                // Return the point with the highest probability as the best shot
                return bestShot;
            }
        
        
            /**
             * Retrieves a list of points adjacent to a given point on the game board.
             * This method calculates the points that are directly up, down, left, and right
             * of the provided point, considering only valid coordinates within the game board.
             * It's utilized in strategies that require knowledge of surrounding cells, such as
             * determining potential next shots around a hit.
             *
             * @param p The point for which adjacent points are to be found.
             * @return A list of points adjacent to the given point, filtered for valid game board coordinates.
             */
            private List<Point> getAdjacentPoints(Point p) {
                List<Point> adjacentPoints = new ArrayList<>();
                // Array defining the four directions: Up, Down, Left, Right
                int[][] directions = {{0, 1}, {0, -1}, {-1, 0}, {1, 0}};
        
                // Iterate through each direction to find adjacent points
                for (int[] dir : directions) {
                    int newRow = p.x + dir[0];
                    int newCol = p.y + dir[1];
        
                    // Add the point to the list if it is a valid coordinate on the board
                    if (isValidCoordinate(newRow, newCol)) {
                        adjacentPoints.add(new Point(newRow, newCol));
                    }
                }
        
                // Return the list of adjacent, valid points
                return adjacentPoints;
            }
        
        
        
            /**
             * Updates the assumed orientation of the currently targeted ship based on the list of hits.
             * This method analyzes the hit points recorded in the hitList to determine if the ship is placed
             * horizontally or vertically. The orientation is set to horizontal if all hits are in the same row,
             * vertical if they are in the same column, and remains unclear (null) if the hits do not align
             * either horizontally or vertically.
             */
            private void updateShipOrientationBasedOnHits() {
                // If there are less than two hits, orientation cannot be determined
                if (hitList.size() < 2) {
                    shipOrientation = null;
                    return;
                }
        
                boolean isHorizontal = true;
                boolean isVertical = true;
                // Take the coordinates of the first hit as reference points
                int firstRow = hitList.get(0).x;
                int firstCol = hitList.get(0).y;
        
                // Iterate through the hitList to determine the ship's orientation
                for (Point hit : hitList) {
                    if (hit.x != firstRow) {
                        isVertical = false;  // Different rows imply it's not vertical
                    }
                    if (hit.y != firstCol) {
                        isHorizontal = false; // Different columns imply it's not horizontal
                    }
                }
        
                // Set the shipOrientation based on the findings
                if (isHorizontal && !isVertical) {
                    shipOrientation = true; // The ship is oriented horizontally
                } else if (!isHorizontal && isVertical) {
                    shipOrientation = false; // The ship is oriented vertically
                } else {
                    shipOrientation = null; // Orientation remains unclear
                }
            }
        
        
            /**
             * Determines the next shot based on the assumed orientation of the targeted ship.
             * This method calculates the next shot point either to the right or left of the last hit
             * for a horizontally oriented ship, or above or below the last hit for a vertically oriented ship.
             * The method only considers valid shots within the game board bounds.
             *
             * @return The next shot point based on the ship's orientation, or null if no valid shot is found.
             */
            private Point getNextShotInLineBasedOnOrientation() {
                // Return null if orientation is unknown or there are no hits to base the decision on
                if (shipOrientation == null || hitList.isEmpty()) {
                    return null;
                }
        
                // Get the first and last hit points from the hit list
                Point firstHit = hitList.get(0);
                Point lastHit = hitList.get(hitList.size() - 1);
        
                if (shipOrientation) {
                    // If the ship is oriented horizontally, check for shots to the right and left
                    Point shotRight = new Point(lastHit.x, lastHit.y + 1);
                    if (isValidShot(shotRight)) {
                        return shotRight;
                    }
        
                    Point shotLeft = new Point(firstHit.x, firstHit.y - 1);
                    if (isValidShot(shotLeft)) {
                        return shotLeft;
                    }
                } else {
                    // If the ship is oriented vertically, check for shots above and below
                    Point shotDown = new Point(lastHit.x + 1, lastHit.y);
                    if (isValidShot(shotDown)) {
                        return shotDown;
                    }
        
                    Point shotUp = new Point(firstHit.x - 1, firstHit.y);
                    if (isValidShot(shotUp)) {
                        return shotUp;
                    }
                }
        
                // Return null if no valid shot is found based on the ship's orientation
                return null;
            }
        
        
        
            /**
             * Checks if a given shot is valid on the game board.
             * This method verifies that the shot is within the boundaries of the game board
             * and targets a cell that has not been shot at yet (i.e., the cell is in an 'Empty' state).
             * It is used to ensure that the bots shot selections are valid and executable within the game.
             *
             * @param p The point representing the coordinates of the shot to be validated.
             * @return true if the shot is valid (within the game board and targeting an empty cell); false otherwise.
             */
            private boolean isValidShot(Point p) {
                // Check if the point is within the game board and targets an empty cell
                return p.x >= 0 && p.x < gameSize && p.y >= 0 && p.y < gameSize && board[p.x][p.y] == CellState.Empty;
            }
        
        
        
            /**
             * Updates the probability map for the entire game board.
             * This method resets the current probabilities and recalculates them for each cell
             * based on the potential presence of unsunk ships. It considers the sizes of the ships
             * that are still in play and updates the probabilities for each cell being part of an unsunk ship.
             * The method is crucial for the bots decision-making process, as it guides the shot selection
             * by identifying the most probable locations of the remaining enemy ships.
             */
            private void updateProbabilityMap() {
                // Reset the probability map to zero for all points
                probabilityMap.replaceAll((p, v) -> 0.0);
        
                // Iterate through all ship sizes still in play
                for (int shipSize : battleShip.getShipSizes()) {
                    // Skip updating probabilities for sunk ship sizes
                    if (!sunkShipSizes.contains(shipSize)) {
                        // Update probabilities for each cell on the board
                        for (Point point : probabilityMap.keySet()) {
                            // Only update probabilities for empty cells
                            if (board[point.x][point.y] == CellState.Empty) {
                                // Calculate the probability for the current cell and ship size
                                double prob = calculateProbabilityForShipSize(point.x, point.y, shipSize);
                                // Update the probability map with the new calculated probability
                                probabilityMap.put(point, probabilityMap.get(point) + prob);
                            }
                        }
                    }
                }
            }
        
        
        
            /**
             * Calculates the probability of a ship of a given size being placed horizontally at a specified location.
             * This method iterates through each cell starting from the specified row and column, extending horizontally
             * for the length of the ship. It checks if the placement is possible (not marked as impossible) and calculates
             * the probability based on the size of the game board. If any part of the ship placement is marked as impossible,
             * the probability is set to zero.
             *
             * @param row The starting row coordinate for the potential ship placement.
             * @param col The starting column coordinate for the potential ship placement.
             * @param shipSize The size of the ship to be placed.
             * @return The probability of being able to place the ship at the specified location horizontally.
             */
            private double calculateHorizontalProbability(int row, int col, int shipSize) {
                double prob = 1.0;  // Initialize probability
        
                // Iterate through each cell horizontally from the starting point for the length of the ship
                for (int i = 0; i < shipSize; i++) {
                    // Check if the cell is marked as impossible for ship placement
                    if (impossibleCells[row][col + i]) {
                        return 0.0;  // Return zero probability if any part of the placement is impossible
                    }
                    // Multiply the probability by a factor (adjust this based on game logic and board size)
                    prob *= (1.0 / (gameSize * gameSize));
                }
        
                return prob;  // Return the calculated probability
            }
        
        
            /**
             * Calculates the probability of a ship of a given size being placed vertically at a specified location.
             * This method iterates through each cell starting from the specified row and column, extending vertically
             * for the length of the ship. It assesses whether placement is feasible (not in an impossible cell) and
             * calculates the probability based on the size of the game board. If any part of the ship placement is marked
             * as impossible, the probability is set to zero.
             *
             * @param row The starting row coordinate for the potential ship placement.
             * @param col The starting column coordinate for the potential ship placement.
             * @param shipSize The size of the ship to be placed.
             * @return The probability of being able to place the ship at the specified location vertically.
             */
            private double calculateVerticalProbability(int row, int col, int shipSize) {
                double prob = 1.0;  // Initialize probability
        
                // Iterate through each cell vertically from the starting point for the length of the ship
                for (int i = 0; i < shipSize; i++) {
                    // Check if the cell is marked as impossible for ship placement
                    if (impossibleCells[row + i][col]) {
                        return 0.0;  // Return zero probability if any part of the placement is impossible
                    }
                    // Multiply the probability by a factor (adjust this based on game logic and board size)
                    prob *= (1.0 / (gameSize * gameSize));
                }
        
                return prob;  // Return the calculated probability
            }
        
        
        
            /**
             * Determines whether a ship of a given size can be placed horizontally at a specified location.
             * This method checks if the ship can fit horizontally starting from the specified row and column,
             * ensuring that it doesn't extend beyond the game board's boundaries. It also verifies that each
             * cell along the ship's length is empty and not marked as an impossible location for ship placement.
             *
             * @param row The row coordinate for the starting point of the ship placement.
             * @param col The column coordinate for the starting point of the ship placement.
             * @param shipSize The size of the ship to be placed.
             * @return true if the ship can be placed horizontally at the specified location; false otherwise.
             */
            private boolean canPlaceShipHorizontally(int row, int col, int shipSize) {
                // Check if the ship extends beyond the game board's boundaries
                if (col + shipSize > gameSize) return false;
        
                // Iterate through each cell where the ship would be placed
                for (int i = 0; i < shipSize; i++) {
                    // Check if each cell is empty and not marked as impossible for ship placement
                    if (board[row][col + i] != CellState.Empty || impossibleCells[row][col + i]) {
                        return false;  // Return false if any cell is occupied or impossible
                    }
                }
        
                return true;  // Return true if the ship can be placed horizontally
            }
        
        
            /**
             * Determines whether a ship of a given size can be placed vertically at a specified location.
             * This method checks if the ship can fit vertically starting from the specified row and column,
             * ensuring that it doesn't extend beyond the game board's boundaries. It also verifies that each
             * cell along the ship's length is empty and not marked as an impossible location for ship placement.
             *
             * @param row The row coordinate for the starting point of the ship placement.
             * @param col The column coordinate for the starting point of the ship placement.
             * @param shipSize The size of the ship to be placed.
             * @return true if the ship can be placed vertically at the specified location; false otherwise.
             */
            private boolean canPlaceShipVertically(int row, int col, int shipSize) {
                // Check if the ship extends beyond the game board's boundaries
                if (row + shipSize > gameSize) return false;
        
                // Iterate through each cell where the ship would be placed
                for (int i = 0; i < shipSize; i++) {
                    // Check if each cell is empty and not marked as impossible for ship placement
                    if (board[row + i][col] != CellState.Empty || impossibleCells[row + i][col]) {
                        return false;  // Return false if any cell is occupied or impossible
                    }
                }
        
                return true;  // Return true if the ship can be placed vertically
            }
        
        
        
            /**
             * Rebuilds the priority queue based on the current probability map.
             * This method clears the existing probability queue and repopulates it with the points
             * from the probability map, considering only those points that are still empty on the board.
             * Each point is added along with its associated probability value. The priority queue is
             * used for efficient selection of the next shot based on the calculated probabilities.
             */
            private void rebuildProbabilityQueue() {
                // Clear the existing probability queue
                probabilityQueue.clear();
        
                // Iterate through each entry in the probability map
                for (Map.Entry<Point, Double> entry : probabilityMap.entrySet()) {
                    Point point = entry.getKey();
                    // Only add points to the queue that are empty on the board
                    if (board[point.x][point.y] == CellState.Empty) {
                        // Add the point and its probability to the queue
                        probabilityQueue.add(new CellProbability(point, entry.getValue()));
                    }
                }
            }
        
        
        
            /**
             * Generates a random shot within the bounds of the game board.
             * This method selects a random point on the board, ensuring that the chosen cell
             * is empty (i.e., it has not been shot at yet). It continues to select random points
             * until an empty cell is found, thereby guaranteeing a valid shot.
             *
             * @return A Point object representing the coordinates of the randomly selected shot.
             */
            private Point randomShot() {
                Point shot;
                // Continuously generate random points until an empty cell is found
                do {
                    // Create a point with random coordinates within the game board
                    shot = new Point(random.nextInt(gameSize), random.nextInt(gameSize));
                } while (board[shot.x][shot.y] != CellState.Empty);  // Ensure the cell is empty
        
                return shot;  // Return the valid random shot
            }
        
        
            /**
             * Resets the targeting mode to its initial state.
             * This method is called when the bot needs to exit target mode, typically after sinking a ship
             * or when it needs to reevaluate its strategy. It resets various attributes related to target mode,
             * including disabling the mode, clearing the last hit point, clearing the list of hit points, and
             * resetting the assumed orientation of the targeted ship.
             */
            private void resetTargetMode() {
                targetMode = false;          // Disable target mode
                lastHit = null;              // Clear the last hit point
                hitList.clear();             // Clear the list of hit points
                shipOrientation = null;      // Reset the assumed ship orientation
            }
        
        
            /**
             * Updates the target mode by reassessing the ship's orientation based on the hit list.
             * This method is invoked when there are multiple hits in the hit list to determine
             * the orientation of the ship being targeted. It sets the shipOrientation attribute
             * based on the alignment of the first two hits: horizontal if they are in the same row,
             * or vertical if they are in the same column.
             */
            private void updateTargetMode() {
                // Check if there are at least two hits to determine the orientation
                if (!hitList.isEmpty() && hitList.size() > 1) {
                    Point firstHit = hitList.get(0);  // Get the first hit point
                    Point secondHit = hitList.get(1); // Get the second hit point
        
                    // Determine the orientation: true for horizontal, false for vertical
                    shipOrientation = (firstHit.x == secondHit.x);
                }
            }
        
        
            /**
             * Updates the probability map after a ship has been sunk.
             * This method iterates over each point in the hit list (which represents parts of the sunk ship)
             * and marks adjacent cells as impossible locations for other ships. It also adjusts the probabilities
             * for cells around the sunk ship, reflecting the updated game state where no other ship can occupy
             * those adjacent cells. This is essential for refining the probability map based on known ship placements.
             */
            private void updateProbabilityAfterSinking() {
                // Iterate over each part of the sunk ship
                for (Point sunkShipPart : hitList) {
                    // Mark cells adjacent to each part of the sunk ship as impossible for ship placement
                    markAdjacentAsImpossible(sunkShipPart.x, sunkShipPart.y);
        
                    // Adjust probability for cells around each part of the sunk ship
                    updateAdjacentProbabilities(sunkShipPart.x, sunkShipPart.y);
                }
            }
        
        
            /**
             * Updates the probabilities of cells adjacent to a given coordinate on the game board.
             * This method is used following events that change the game state, such as sinking a ship,
             * to adjust the probabilities of nearby cells. It calculates new probabilities for cells in all
             * four cardinal directions (up, down, left, right) adjacent to the specified cell, provided they
             * are within the game board's boundaries and are empty.
             *
             * @param row The row coordinate of the central point from which to update adjacent probabilities.
             * @param col The column coordinate of the central point from which to update adjacent probabilities.
             */
            private void updateAdjacentProbabilities(int row, int col) {
                // Define the four cardinal directions
                int[][] directions = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
        
                // Iterate through each direction to update adjacent cell probabilities
                for (int[] dir : directions) {
                    int newRow = row + dir[0];
                    int newCol = col + dir[1];
                    Point adjacentPoint = new Point(newRow, newCol);
        
                    // Check if the adjacent cell is within the game board and is empty
                    if (isValidCoordinate(newRow, newCol) && board[newRow][newCol] == CellState.Empty) {
                        // Calculate and update the probability for the adjacent cell
                        double newProbability = calculateCellProbability(newRow, newCol);
                        probabilityMap.put(adjacentPoint, newProbability);
                    }
                }
            }
        
        
        
            /**
             * Marks cells adjacent to a given coordinate as impossible locations for ship placement.
             * This method is typically used after a ship has been sunk to mark the surrounding cells,
             * which cannot contain any part of another ship. It assesses cells in all four cardinal
             * directions (up, down, left, right) adjacent to the specified cell and marks them as impossible
             * if they are within the game board's boundaries.
             *
             * @param row The row coordinate of the central point from which to mark adjacent cells.
             * @param col The column coordinate of the central point from which to mark adjacent cells.
             */
            private void markAdjacentAsImpossible(int row, int col) {
                // Define the four cardinal directions
                int[][] directions = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
        
                // Iterate through each direction to mark adjacent cells as impossible
                for (int[] dir : directions) {
                    int newRow = row + dir[0];
                    int newCol = col + dir[1];
        
                    // Check if the adjacent cell is within the game board boundaries
                    if (isValidCoordinate(newRow, newCol)) {
                        // Mark the cell as impossible for ship placement
                        impossibleCells[newRow][newCol] = true;
                    }
                }
            }
        
        
        
            /**
             * Calculates the probability of a cell being occupied by a part of a ship.
             * This method considers both horizontal and vertical placement possibilities for all
             * unsunk ship sizes. It sums up the probabilities for each ship size that can be placed
             * at the given cell, considering the cell's current state and the game's constraints.
             * Cells marked as impossible for ship placement immediately return a probability of zero.
             *
             * @param row The row coordinate of the cell for which to calculate the probability.
             * @param col The column coordinate of the cell for which to calculate the probability.
             * @return The calculated probability of the cell being occupied by a ship.
             */
            private double calculateCellProbability(int row, int col) {
                // If the cell is marked as impossible, its probability is zero
                if (impossibleCells[row][col]) {
                    return 0.0;
                }
        
                double probability = 0.0;  // Initialize probability
        
                // Iterate through the sizes of unsunk ships
                for (int shipSize : battleShip.getShipSizes()) {
                    // Skip calculation for ship sizes that are already sunk
                    if (sunkShipSizes.contains(shipSize)) {
                        continue;
                    }
        
                    // Add probability for horizontal placement if possible
                    if (canPlaceShipHorizontally(row, col, shipSize)) {
                        probability += (1.0 / shipSize);
                    }
        
                    // Add probability for vertical placement if possible
                    if (canPlaceShipVertically(row, col, shipSize)) {
                        probability += (1.0 / shipSize);
                    }
                }
        
                return probability;  // Return the summed probability
            }
        
        
            /**
             * Determines whether the current state of the game can be considered as the early game phase.
             * This method assesses the stage of the game based on the number of hits and total shots made.
             * It uses a percentage threshold of the game board to define the early game, along with a dynamic
             * threshold based on the sizes of the ships. This assessment helps in deciding which strategy to
             * apply during the game - different strategies might be more effective in early or later stages.
             *
             * @return true if the game is still in its early stages, false otherwise.
             */
            private boolean isEarlyGame() {
                int totalHits = hitList.size();  // Count of total hits made so far
                int totalShots = getTotalShots();  // Total number of shots fired so far
        
                // Define threshold for considering it as early game based on board size (e.g., 25% of the board)
                int earlyGamePercentageThreshold = (int) (gameSize * gameSize * 0.25);
        
                // Dynamic threshold for hits, based on ship sizes
                int hitThreshold = determineHitThreshold();
        
                // Determine if it's still early game based on the number of shots and hits
                return totalHits < hitThreshold && totalShots < earlyGamePercentageThreshold;
            }
        
        
            /**
             * Determines the hit threshold to help define the early game phase.
             * This method calculates a dynamic threshold based on the sizes of the ships in the game,
             * specifically using the size of the smallest ship. The logic assumes that the game moves
             * out of the early phase after hitting at least half of the smallest ship. This threshold
             * is used in conjunction with other criteria to determine the game's current stage and
             * adjust the bots' strategy accordingly.
             *
             * @return The dynamically calculated hit threshold based on the smallest ship's size.
             */
            private int determineHitThreshold() {
                // Find the size of the smallest ship in the game
                int smallestShipSize = findSmallestShipSize();
        
                // Calculate the hit threshold as half the size of the smallest ship
                return smallestShipSize / 2;
            }
        
        
            /**
             * Identifies the size of the smallest ship in the game.
             * This method iterates through the array of initial ship sizes and finds the smallest value.
             * The smallest ship size is an important factor in various strategic calculations, such as
             * determining hit thresholds and assessing the game's stage.
             *
             * @return The size of the smallest ship in the initial ship sizes array.
             */
            private int findSmallestShipSize() {
                int smallestSize = Integer.MAX_VALUE;  // Initialize with the maximum possible value
        
                // Iterate through each ship size
                for (int size : initialShipSizes) {
                    // Update the smallestSize if a smaller ship size is found
                    if (size < smallestSize) {
                        smallestSize = size;
                    }
                }
        
                return smallestSize;  // Return the smallest ship size
            }
        
        
        
            /**
             * Calculates the total number of shots fired in the game.
             * This method iterates over the entire game board and counts the number of cells that
             * are not in the 'Empty' state, indicating that a shot has been fired at those cells.
             * It provides an accurate count of all shots made, used in determining the game's stage
             * and in various strategic decision-making processes.
             *
             * @return The total number of shots fired so far in the game.
             */
            private int getTotalShots() {
                int totalShots = 0;  // Initialize the counter for total shots
        
                // Iterate through each cell on the game board
                for (int i = 0; i < gameSize; i++) {
                    for (int j = 0; j < gameSize; j++) {
                        // Increment the counter for each cell that is not empty (i.e., a shot has been fired)
                        if (board[i][j] != CellState.Empty) {
                            totalShots++;
                        }
                    }
                }
        
                return totalShots;  // Return the total number of shots
            }
        
        
            /**
             * Calculates the probability of a ship of a specific size being located at a given cell.
             * This method considers both horizontal and vertical placements of the ship at the specified coordinates.
             * It calculates the probability based on whether the ship can be placed in those orientations, given the
             * current state of the game board. The method also adjusts the probability based on adjacent hits and the
             * potential orientation of ships. If the ship size has already been sunk, it skips the calculation and returns zero.
             *
             * @param x The x-coordinate (row) of the cell for probability calculation.
             * @param y The y-coordinate (column) of the cell for probability calculation.
             * @param shipSize The size of the ship for which to calculate the probability.
             * @return The calculated probability of a ship of the given size being at the specified cell.
             */
            private double calculateProbabilityForShipSize(int x, int y, int shipSize) {
                // Skip calculation and return zero if the ship size has already been sunk
                if (sunkShipSizes.contains(shipSize)) {
                    return 0.0;
                }
        
                double probability = 0.0;  // Initialize probability
        
                // Add to the probability if the ship can be placed horizontally at the cell
                if (canPlaceShipHorizontally(x, y, shipSize)) {
                    probability += calculateHorizontalProbability(x, y, shipSize);
                }
        
                // Add to the probability if the ship can be placed vertically at the cell
                if (canPlaceShipVertically(x, y, shipSize)) {
                    probability += calculateVerticalProbability(x, y, shipSize);
                }
        
                // Adjust the probability based on adjacent hits and potential ship orientation
                probability *= adjustProbabilityBasedOnHits(x, y);
        
                // Apply additional factors based on patterns or other strategic considerations
                double patternProbabilityFactor = getPatternProbabilityFactor(x, y, shipSize);
                probability *= patternProbabilityFactor;
        
                return probability;  // Return the final calculated probability
            }
        
        
            /**
             * Adjusts the probability of a cell being occupied by a ship based on adjacent hits.
             * This method increases the probability factor if the cell is adjacent to a hit, considering
             * potential ship patterns. It checks for hits in all four cardinal directions and identifies
             * whether the hits form a horizontal or vertical pattern. The probability is adjusted higher
             * if adjacent hits suggest a possible extension of a ship in those directions. This adjustment
             * helps in refining the shot selection by taking into account the orientation of partially hit ships.
             *
             * @param x The x-coordinate (row) of the cell for which to adjust the probability.
             * @param y The y-coordinate (column) of the cell for which to adjust the probability.
             * @return The adjusted probability factor for the cell based on adjacent hits.
             */
            private double adjustProbabilityBasedOnHits(int x, int y) {
                double adjustmentFactor = 1.0;  // Initialize adjustment factor
        
                // Flags to track if there are adjacent hits forming horizontal or vertical patterns
                boolean horizontalHit = false, verticalHit = false;
        
                // Check for hits in all four cardinal directions
                int[][] directions = {{0, 1}, {0, -1}, {-1, 0}, {1, 0}};
                for (int[] dir : directions) {
                    int adjacentX = x + dir[0];
                    int adjacentY = y + dir[1];
        
                    // Increase probability if the adjacent cell is a hit
                    if (isValidCoordinate(adjacentX, adjacentY) && board[adjacentX][adjacentY] == CellState.Hit) {
                        adjustmentFactor *= 1.5;  // Increase factor for cells adjacent to a hit
        
                        // Determine if hits form horizontal or vertical patterns
                        if (dir[0] == 0) horizontalHit = true;  // Horizontal pattern
                        if (dir[1] == 0) verticalHit = true;   // Vertical pattern
                    }
                }
        
                // Further adjust probability based on detected hit patterns
                if (horizontalHit && verticalHit) {
                    // Hits in multiple directions may suggest proximity to multiple ships
                    adjustmentFactor *= 1.2;
                } else if (horizontalHit) {
                    // Increase probability for horizontal extension if horizontal hits detected
                    adjustmentFactor *= predictHorizontalExtension(x, y);
                } else if (verticalHit) {
                    // Increase probability for vertical extension if vertical hits detected
                    adjustmentFactor *= predictVerticalExtension(x, y);
                }
        
                return adjustmentFactor;  // Return the adjusted probability factor
            }
        
        
            /**
             * Predicts the likelihood of a horizontal extension of a ship from a given cell.
             * This method adjusts a probability factor based on the state of cells to the left and right
             * of the given coordinates. It increases the factor if there are hits adjacent to the cell
             * (suggesting a possible horizontal ship extension), and decreases it if there are misses
             * (suggesting the absence of a ship in that direction). This probability adjustment aids in
             * refining the bots targeting strategy, especially when determining the orientation of partially hit ships.
             *
             * @param x The x-coordinate (row) of the cell for which to predict the horizontal extension.
             * @param y The y-coordinate (column) of the cell for which to predict the horizontal extension.
             * @return The adjusted factor indicating the likelihood of a horizontal ship extension from the cell.
             */
            private double predictHorizontalExtension(int x, int y) {
                double extensionFactor = 1.0;  // Initialize the extension factor
        
                // Check for hits or misses to the left of the cell
                if (y > 0) {
                    if (board[x][y - 1] == CellState.Hit) extensionFactor *= 1.2; // Increase if there is a hit on the left
                    if (board[x][y - 1] == CellState.Miss) extensionFactor *= 0.8; // Decrease if there is a miss on the left
                }
        
                // Check for hits or misses to the right of the cell
                if (y < gameSize - 1) {
                    if (board[x][y + 1] == CellState.Hit) extensionFactor *= 1.2; // Increase if there is a hit on the right
                    if (board[x][y + 1] == CellState.Miss) extensionFactor *= 0.8; // Decrease if there is a miss on the right
                }
        
                return extensionFactor;  // Return the probability extension factor
            }
        
        
        
            /**
             * Predicts the likelihood of a vertical extension of a ship from a given cell.
             * This method adjusts a probability factor based on the state of cells above and below
             * the given coordinates. It increases the factor if there are hits adjacent to the cell
             * (suggesting a possible vertical ship extension), and decreases it if there are misses
             * (suggesting the absence of a ship in that direction). This probability adjustment is
             * instrumental in refining the bots targeting strategy, particularly when determining
             * the orientation of partially hit ships.
             *
             * @param x The x-coordinate (row) of the cell for which to predict the vertical extension.
             * @param y The y-coordinate (column) of the cell for which to predict the vertical extension.
             * @return The adjusted factor indicating the likelihood of a vertical ship extension from the cell.
             */
            private double predictVerticalExtension(int x, int y) {
                double extensionFactor = 1.0;  // Initialize the extension factor
        
                // Check for hits or misses above the cell
                if (x > 0) {
                    if (board[x - 1][y] == CellState.Hit) extensionFactor *= 1.2; // Increase if there is a hit above
                    if (board[x - 1][y] == CellState.Miss) extensionFactor *= 0.8; // Decrease if there is a miss above
                }
        
                // Check for hits or misses below the cell
                if (x < gameSize - 1) {
                    if (board[x + 1][y] == CellState.Hit) extensionFactor *= 1.2; // Increase if there is a hit below
                    if (board[x + 1][y] == CellState.Miss) extensionFactor *= 0.8; // Decrease if there is a miss below
                }
        
                return extensionFactor;  // Return the probability extension factor
            }
        
        
        
            /**
             * Calculates an overall pattern probability factor for a cell based on various strategic elements.
             * This method combines several factors that influence the probability of a ship being at a given cell.
             * It includes an edge avoidance factor to account for the less likely placement of ships at the edges,
             * a central concentration factor that increases probabilities towards the center of the board, and
             * a randomness factor to add variability and unpredictability to the bots' strategy. These combined
             * factors help in making a more nuanced and effective probability assessment for each cell.
             *
             * @param x The x-coordinate (row) of the cell for which to calculate the pattern probability factor.
             * @param y The y-coordinate (column) of the cell for which to calculate the pattern probability factor.
             * @param shipSize The size of the ship being considered for the probability calculation.
             * @return The overall pattern probability factor for the cell.
             */
            private double getPatternProbabilityFactor(int x, int y, int shipSize) {
                // Calculate individual factors influencing the cell's probability
                double edgeAvoidanceFactor = calculateEdgeAvoidanceFactor(x, y, shipSize);
                double centralConcentrationFactor = calculateCentralConcentrationFactor(x, y);
                double randomnessFactor = calculateRandomnessFactor();
        
                // Combine the factors to compute the overall pattern probability factor
                return edgeAvoidanceFactor * centralConcentrationFactor * randomnessFactor;
            }
        
        
            /**
             * Calculates the edge avoidance factor for a cell based on its proximity to the nearest edge and the ship size.
             * This method assesses how close a given cell is to the nearest edge of the game board. The factor is adjusted
             * based on the size of the ship being considered, with the assumption that larger ships are less likely to be
             * placed close to the edges. The edge avoidance factor is used as part of the strategy to estimate the probability
             * of a ship being located at a particular cell, especially for cells near the board's boundaries.
             *
             * @param x The x-coordinate (row) of the cell for which to calculate the edge avoidance factor.
             * @param y The y-coordinate (column) of the cell for which to calculate the edge avoidance factor.
             * @param shipSize The size of the ship being considered for the calculation.
             * @return The calculated edge avoidance factor for the cell.
             */
            private double calculateEdgeAvoidanceFactor(int x, int y, int shipSize) {
                // Calculate the cell's distance from the nearest edge
                int edgeDistance = Math.min(Math.min(x, gameSize - x - 1), Math.min(y, gameSize - y - 1));
        
                // Determine the influence of ship size on edge placement
                double sizeFactor = 1.0 - ((double) shipSize / gameSize);
        
                // Combine edge distance and ship size factors to compute the edge avoidance factor
                return 1.0 - sizeFactor * (1.0 / (edgeDistance + 1));
            }
        
        
        
            /**
             * Calculates the central concentration factor for a cell, increasing its probability based on proximity to the center of the board.
             * This method computes the cell's distance from the center of the game board and adjusts the probability factor accordingly,
             * under the assumption that ships are more likely to be placed closer to the center. The central concentration factor is
             * a part of the overall strategy to refine the probability map, giving more weight to cells near the center of the board.
             *
             * @param x The x-coordinate (row) of the cell for which to calculate the central concentration factor.
             * @param y The y-coordinate (column) of the cell for which to calculate the central concentration factor.
             * @return The calculated central concentration factor for the cell.
             */
            private double calculateCentralConcentrationFactor(int x, int y) {
                // Determine the center coordinates of the game board
                int centerX = gameSize / 2;
                int centerY = gameSize / 2;
        
                // Calculate the Manhattan distance from the cell to the center of the board
                int distanceFromCenter = Math.abs(x - centerX) + Math.abs(y - centerY);
        
                // Calculate and return the central concentration factor, increasing as the cell gets closer to the center
                return 1.0 + 0.5 * (1.0 / (distanceFromCenter + 1));
            }
        
        
            /**
             * Generates a randomness factor to introduce variability into the bots decision-making process.
             * This method calculates a random factor within a defined range to add an element of unpredictability
             * to the bots' strategy. This randomness helps in avoiding overly predictable patterns in the bots
             * shot selection and probability assessments, making it more challenging for opponents to anticipate
             * the bots actions. The randomness factor is integrated into various probability calculations.
             *
             * @return A random factor within a specified range (e.g., between 0.8 and 1.2).
             */
            private double calculateRandomnessFactor() {
                // Generate and return a random factor within the range of 0.8 to 1.2
                return 0.8 + 0.4 * Math.random(); // Random factor between 0.8 and 1.2
            }
        
        
        
            /**
             * Selects the next targeted shot based on updated probability assessments.
             * This method first rebuilds the probability queue to reflect the latest probabilities
             * for each cell on the game board. It then selects the cell with the highest probability
             * of containing a ship, ensuring that the cell is empty (i.e., not already shot at). If no
             * high probability shots are available, it defaults to a random shot as a fallback strategy.
             *
             * @return The point representing the coordinates of the next targeted shot,
             *         chosen based on the highest probability or randomly if no suitable target is found.
             */
            private Point getTargetedShot() {
                // Rebuild the probability queue to include the latest probabilities
                rebuildProbabilityQueue();
        
                // Stream through the probability queue, filter for empty cells, and select the first highest probability
                return probabilityQueue.stream()
                        .filter(cellProb -> board[cellProb.point.x][cellProb.point.y] == CellState.Empty)
                        .findFirst()
                        .map(cellProb -> cellProb.point)
                        .orElseGet(this::randomShot); // Fallback to a random shot if no high probability cells are found
            }
        
        
        
            /**
             * Represents the probability of a cell being occupied by a part of a ship.
             * This class is used to pair a point on the game board with its corresponding probability score.
             * It implements the Comparable interface to allow sorting of these objects based on their probability,
             * facilitating the selection of the most probable shots. The comparison is done in descending order
             * of probability, meaning higher probabilities come first.
             */
            private static class CellProbability implements Comparable<CellProbability> {
                Point point;          // The point on the game board
                double probability;   // The probability associated with this point
        
                /**
                 * Constructs a CellProbability object with a specific point and its probability.
                 *
                 * @param point The point on the game board.
                 * @param probability The probability of a ship being at this point.
                 */
                public CellProbability(Point point, double probability) {
                    this.point = point;
                    this.probability = probability;
                }
        
                /**
                 * Compares this CellProbability object with another to determine their ordering.
                 *
                 * @param other Another CellProbability object to be compared against.
                 * @return A negative integer, zero, or a positive integer as this object is less than,
                 *         equal to, or greater than the specified object in terms of probability.
                 */
                @Override
                public int compareTo(CellProbability other) {
                    // Sort in descending order of probability
                    return Double.compare(other.probability, this.probability);
                }
            }
        
        }`,
    },
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
    {
        name: 'ShipOrientation.java',
        code: `package BattleShipAPI;

    public enum ShipOrientation {
        Vertical,
        Horizontal;
    
        private ShipOrientation() {
        }
    }`,
    }
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
                Access the complete code for this project via the downloadable ZIP file. This comprehensive package contains all the necessary files and documentation to explore and understand the BattleShip Bot in detail.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href="https://drive.google.com/uc?export=download&id=1lzJLerHY6IB5U9nSyc3LxcWD01hFUd46"
                startIcon={<GetAppIcon />}
                sx={{ marginTop: '1rem' }}
                download="BattleShip-main.zip"
            >
                Download Full Code
            </Button>

        </Grid>
    );
};

export default BattleShipBot;
