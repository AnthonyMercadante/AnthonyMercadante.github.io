/**
 * The life archive.
 *
 * This file is the single source of truth for the /story route: chapters, photo
 * captions, and the surviving music catalogue. It is deliberately data-first and
 * prose-heavy rather than clever, because the point is longevity — someone (or
 * something) reading this in thirty years should be able to reconstruct the
 * timeline without needing the rest of the codebase.
 *
 * Media lives in public/story/ and is referenced by URL, never imported. The
 * originals are 860 MB of 192 kHz WAVs and 3264 px phone photos; routing them
 * through webpack would be a disaster, and two of them exceed GitHub's 100 MB
 * per-file ceiling. See .gitignore.
 *
 * Every date below was recovered from EXIF or file metadata rather than memory.
 * Photo timestamps are local Eastern time; the EXIF is stored as UTC.
 */

export type Accent =
  | 'cyan'
  | 'amber'
  | 'violet'
  | 'sky'
  | 'rose'
  | 'orange'
  | 'fuchsia'
  | 'emerald';

export interface Photo {
  slug: string;
  /** ISO local date, for sorting and <time> elements. */
  date: string;
  dateLabel: string;
  title: string;
  caption: string;
  /** Panoramas and stills that should not be cropped square in the grid. */
  wide?: boolean;
}

export interface Track {
  slug: string;
  title: string;
  alias: 'Synth Rider' | 'M E R C S' | null;
  /** Human label for when it was made, where that is knowable. */
  when: string;
  /** Seconds. Read from the encoded file, not estimated. */
  duration: number;
  /** The format of the surviving master this was transcoded from. */
  source: string;
  note: string;
  /**
   * How confident the attribution is:
   *  - 'tagged'       — embedded ID3 metadata names the artist and year
   *  - 'filename'     — the original filename names it
   *  - 'unattributed' — the file survived with no identifying metadata at all
   */
  attribution: 'tagged' | 'filename' | 'unattributed';
}

export interface Clip {
  slug: string;
  title: string;
  when: string;
  duration: string;
  note: string;
  /** Square social-format video vs standard widescreen. */
  square?: boolean;
}

export interface Chapter {
  id: string;
  era: string;
  /** Short label for the sticky timeline rail. */
  railLabel: string;
  title: string;
  subtitle: string;
  accent: Accent;
  paragraphs: string[];
  photos: string[];
  /**
   * Track slugs to play inside this chapter. Audio is distributed across the
   * music chapters rather than stacked in one list, so a session bounce sits
   * beside the photograph taken the same night.
   */
  tracks?: string[];
  /** Video slugs to embed inside this chapter. */
  clips?: string[];
}

/** The camera behind almost every photo in the 2012–2014 chapters. */
export const ARCHIVE_CAMERA = 'Samsung Galaxy Note II (SGH-T889V)';

export const photos: Record<string, Photo> = {
  'den-first-corner': {
    slug: 'den-first-corner',
    date: '2012-12-25',
    dateLabel: 'December 25, 2012',
    title: 'The corner it started in',
    caption:
      'Christmas night, 2012. A Sony Bravia doing duty as a monitor, the tower on the floor with its GTX badge turned deliberately outward, and a laptop running on the carpet because there was no desk for it yet. The fighter-jet print stayed on that wall for years.',
  },
  'lan-new-years-eve': {
    slug: 'lan-new-years-eve',
    date: '2012-12-31',
    dateLabel: 'December 31, 2012',
    title: "New Year's Eve LAN",
    caption:
      "New Year's Eve, 2012. Six machines hauled into the basement and set up on folding tables, pizza on paper plates, every tower humming at once. I hosted these because it was the one night the hardware had an audience.",
  },
  'four-screens-february': {
    slug: 'four-screens-february',
    date: '2013-02-02',
    dateLabel: 'February 2, 2013',
    title: 'Four panels, one desk',
    caption:
      'February 2013. Four displays running simultaneously — an HDTV pressed into service on the left, a laptop wedged into the middle, a flight stick and headset staged on the right. The consoles live underneath.',
  },
  'desk-condenser-mic': {
    slug: 'desk-condenser-mic',
    date: '2013-02-08',
    dateLabel: 'February 8, 2013',
    title: 'The microphone arrives',
    caption:
      'A Blue Yeti lands in the middle of the desk, between a Sharp Aquos and a Dell panel, with a Logitech G-series board on the tray below. The first time the setup was built around audio as much as video.',
  },
  'desk-goes-l-shaped': {
    slug: 'desk-goes-l-shaped',
    date: '2013-03-29',
    dateLabel: 'March 29, 2013',
    title: 'The desk goes L-shaped',
    caption:
      'March 2013. More surface than sense: the desk turns a corner to carry a second workstation on the left wing, a console mid-desk, and the microphone holding its position on the right.',
  },
  'blue-hour-battlestation': {
    slug: 'blue-hour-battlestation',
    date: '2013-04-17',
    dateLabel: 'April 17, 2013',
    title: 'Blue hour',
    caption:
      'April 2013. Blue LEDs, a pop filter on a boom arm, and the tower lifted off the carpet and parked beside the desk so its drive bays were reachable without crawling under anything.',
  },
  'the-den-september': {
    slug: 'the-den-september',
    date: '2013-09-17',
    dateLabel: 'September 17, 2013',
    title: 'The room, coherent',
    caption:
      'September 2013. The whole den finally reads as one thing: posters framed and hung, microphone on a boom, a camera on a tripod, the small screen open to Reddit, and a chair worth sitting in for eight hours.',
  },
  'blood-and-thermal-paste': {
    slug: 'blood-and-thermal-paste',
    date: '2013-11-30',
    dateLabel: 'November 30, 2013',
    title: 'Blood and thermal paste',
    caption:
      'The morning of November 30, 2013. An MSI board mid-install and a thumb opened up on an unfinished case edge. Every build costs a little blood, and you come out of it routing cables with considerably more respect.',
  },
  'first-liquid-cooling': {
    slug: 'first-liquid-cooling',
    date: '2013-12-07',
    dateLabel: 'December 7, 2013',
    title: 'First closed loop',
    caption:
      'December 7, 2013. The first liquid cooler seated on a CPU — Corsair pump block, tubing routed up and around the memory, GPU sitting below it. The evening air cooling stopped being enough.',
  },
  'the-wooden-desk': {
    slug: 'the-wooden-desk',
    date: '2013-12-16',
    dateLabel: 'December 16, 2013',
    title: 'A real desk',
    caption:
      'December 2013. Glass and steel give way to a solid wooden desk. The tower goes up on top where it can actually be seen, headphones hang off the case, and the printer gets demoted to the side table.',
  },
  'the-workbench': {
    slug: 'the-workbench',
    date: '2013-12-26',
    dateLabel: 'December 26, 2013',
    title: 'The bench',
    caption:
      "Boxing Day, 2013. Two folding tables, a whiteboard, and two machines open at once. This was the bench — where other people's dead computers came to be made useful again.",
  },
  'salvage-teardown': {
    slug: 'salvage-teardown',
    date: '2013-12-26',
    dateLabel: 'December 26, 2013',
    title: 'Salvage, sorted',
    caption:
      'The same afternoon, closer in. A stripped board with its slots bare, a 3.5-inch drive, sticks of memory pulled and lined up, a gutted case shell, a loose 80 mm fan. None of this was bought. All of it was somebody else\'s hand-me-down.',
  },
  'five-displays': {
    slug: 'five-displays',
    date: '2013-12-30',
    dateLabel: 'December 30, 2013',
    title: 'Five displays',
    caption:
      'December 30, 2013. Five panels lit at once, all carrying the same photograph of the same lake, because the point was never the wallpaper — it was that they were all working together.',
  },
  'the-sound-card': {
    slug: 'the-sound-card',
    date: '2014-01-23',
    dateLabel: 'January 23, 2014',
    title: 'The hinge',
    caption:
      'January 2014. A discrete sound card held up before it goes in the slot — gold-film capacitors, a Dolby block, RCA outputs down the bracket. This specific object is the hinge in the whole story: the point where the computers and the music stopped being two separate interests.',
  },
  'laptop-stripped-to-board': {
    slug: 'laptop-stripped-to-board',
    date: '2014-01-25',
    dateLabel: 'January 25, 2014',
    title: 'Down to the board',
    caption:
      'A laptop taken all the way down to the bare board: copper heat pipe, blower fan, memory still seated in its slot, its 2.5-inch drive set aside to be reused elsewhere. Teardown as a way of reading how something was designed.',
  },
  'lan-in-the-dark': {
    slug: 'lan-in-the-dark',
    date: '2014-01-27',
    dateLabel: 'January 27, 2014',
    title: 'Lights off',
    caption:
      'January 2014, lights out. Four of us deep into a session on red backlit keys, one already reclined and gone. The same posters from the daylight photos are still on the wall behind us.',
  },
  'four-screens-may': {
    slug: 'four-screens-may',
    date: '2014-05-05',
    dateLabel: 'May 5, 2014',
    title: 'Everything open at once',
    caption:
      'May 2014, mid-evening. A music library queued up on the top panel, a games storefront mid-sale beside it, social feeds spread across the bottom two. Four screens because one context was never enough.',
  },
  'the-crew': {
    slug: 'the-crew',
    date: '2014-05-05',
    dateLabel: 'May 5, 2014',
    title: 'The crew',
    caption:
      'The same night, caught on the webcam. The basement regulars, a whiteboard still covered in whatever we were arguing about, and one of us reading a Captain America comic on the couch.',
    wide: true,
  },
  'first-circuit-lit': {
    slug: 'first-circuit-lit',
    date: '2014-05-29',
    dateLabel: 'May 29, 2014',
    title: 'It lights',
    caption:
      'May 29, 2014. A circuit built by hand on perfboard — transistor, electrolytic capacitor, trimmer pot, resistor — and an LED that lit because I told it to. Small, and a completely different category of thing from assembling a computer.',
  },
  'the-den-panorama': {
    slug: 'the-den-panorama',
    date: '2014-07-22',
    dateLabel: 'July 22, 2014',
    title: 'The den, entire',
    caption:
      'July 2014, shot as a panorama. The finished room: desk and glowing tower on the left, posters, shelves of games and gear, and a couch for whoever turned up. This is the room I disappeared into.',
    wide: true,
  },
  'fan-expo-sword': {
    slug: 'fan-expo-sword',
    date: '2014-08-29',
    dateLabel: 'August 29, 2014',
    title: 'Nerd at heart, on the record',
    caption:
      'Fan Expo, Toronto, August 2014. A replica greatsword in both hands and a Captain America shield in the crate below. I am a nerd at heart and I have never once tried to hide it.',
  },
  'fan-expo-cosplay': {
    slug: 'fan-expo-cosplay',
    date: '2014-08-29',
    dateLabel: 'August 29, 2014',
    title: 'On the floor',
    caption:
      'The same afternoon out on the convention floor, between two cosplayers in full fabricated armour. The costumes, the comics, the games, the hardware — all one impulse. Find the thing you love and go all the way in.',
  },
  'fan-expo-jude': {
    slug: 'fan-expo-jude',
    date: '2014-08-29',
    dateLabel: 'August 29, 2014',
    title: 'Meeting Jude',
    caption:
      'The same Fan Expo, at a booth on the concourse: standing beside a life-size cutout of Jude from 6teen, next to the actor who voiced him. A cartoon I grew up on, and the person behind the voice throwing horns for the photo.',
  },
  'hamilton-room': {
    slug: 'hamilton-room',
    date: '2016-01-01',
    dateLabel: 'Hamilton, 2015–2016',
    title: 'The setup follows me',
    caption:
      'My room in Hamilton during the semester at Mohawk, two friends asleep across the bed at the end of a long night. Three panels, a condenser mic on a boom arm, the tower glowing blue, water bottles and books on the floor. Barely any space and no desk chair — I used the bed as one. Wherever I went, the setup came with me and rearranged itself to fit.',
  },
  'first-guitar': {
    slug: 'first-guitar',
    date: '2016-03-01',
    dateLabel: 'Before Metalworks, c. 2016',
    title: 'The first guitar',
    caption:
      'Two of us with guitars in the basement of my childhood house, a small Line 6 combo amp between us. The black one is mine — the first instrument I ever bought with my own money. This is close to the last time I made music in that house before leaving for Metalworks.',
  },
  'metalworks-studio-6': {
    slug: 'metalworks-studio-6',
    date: '2016-09-01',
    dateLabel: 'Metalworks, 2016–2017',
    title: 'Studio 6',
    caption:
      'One of the rooms at Metalworks: a full large-format console, main monitors soffit-mounted above it, timber diffusion across the ceiling, and a couch for whoever was listening. Walking into a room built entirely around how sound behaves is what opened my eyes to the whole discipline.',
  },
  'at-the-laptop': {
    slug: 'at-the-laptop',
    date: '2018-01-01',
    dateLabel: 'The Synth Rider years',
    title: 'White hair, mixer open',
    caption:
      'Overhead, mid-session: a mixer and arrangement open across the laptop, bleached hair pulled into a ponytail. I looked far more like a punk rockstar then than I do now, and that was entirely deliberate. Worth keeping in the record purely for how much a person can change.',
  },
  'the-purple-studio': {
    slug: 'the-purple-studio',
    date: '2018-08-13',
    dateLabel: 'August 13, 2018 · 11:56 p.m.',
    title: 'The studio we built',
    caption:
      'The room my dad and I built together in the basement of his new house. It started as bare cinderblock. Using what I had learned at Metalworks we treated it properly: bass traps in every corner, broadband absorbers on the walls, clouds overhead, acoustic insulation and matting behind and in front of the drywall, diagonal venting so sound could not escape through the ducts, and jambs fitted to the doors so the seals actually closed. Then we balanced the monitors to the room itself. Not a bedroom with foam on the wall — a real one.',
  },
  'studio-669-lounge': {
    slug: 'studio-669-lounge',
    date: '2018-08-19',
    dateLabel: 'August 19, 2018 · 2:37 a.m.',
    title: '669, from the couch',
    caption:
      'Half past two in the morning at 669 on Queen Street, shot from the couch at the back of the room — my own shoes in the frame, outboard gear glowing in the rack, the live room through the glass. Three floors of studios above a row of storefronts, and completely invisible from the pavement. Nobody walking past would ever have guessed.',
  },
  'studio-669-sept-8': {
    slug: 'studio-669-sept-8',
    date: '2018-09-08',
    dateLabel: 'Saturday, September 8, 2018 · 11:46 p.m.',
    title: 'Room 2, the night of "She"',
    caption:
      'Room 2 at 669, just before midnight on a Saturday — the room we always booked. This is the same session that produced the bounce filed as "She", which sits a little further down this page. The photograph and the audio are the same few hours of the same night, recovered separately, seven years apart.',
  },
  'studio-669-sept-22': {
    slug: 'studio-669-sept-22',
    date: '2018-09-22',
    dateLabel: 'Saturday, September 22, 2018 · 10:17 p.m.',
    title: 'Another Saturday, another group',
    caption:
      'Two weeks later, same building, different people around the desk: someone tracking into a laptop over a MIDI controller, monitors up, a TV running on the wall, and the rest of the room waiting on the couch behind me. The Saturday booking was a standing fixture that autumn.',
  },
  'in-n-out-la': {
    slug: 'in-n-out-la',
    date: '2018-12-02',
    dateLabel: 'December 2, 2018 · 6:15 p.m.',
    title: 'Los Angeles',
    caption:
      'Outside an In-N-Out under palm trees on my first evening in Los Angeles, an IHOP sign burning blue across the road. I could not get over it. Somebody else had paid to fly me here to work on music. Standing in that parking lot, it genuinely felt like I had made it.',
  },
  'la-studio-night': {
    slug: 'la-studio-night',
    date: '2018-12-05',
    dateLabel: 'December 5, 2018 · 5:30 a.m.',
    title: 'Half five in the morning, LA',
    caption:
      'A studio I worked out of in Los Angeles, shot as a panorama at half past five in the morning — a wall of screens running visuals, three laptops open, and everyone still going. In the room: a friend from high school who taught himself to produce, a friend from music school working in bass music, and a rapper from back home in Canada, all of us out there together.',
    wide: true,
  },
  'setup-2020': {
    slug: 'setup-2020',
    date: '2020-10-20',
    dateLabel: 'October 20, 2020',
    title: 'Eleven years on',
    caption:
      'October 2020. A racing chair, a studio monitor up on a stand, acoustic treatment on the wall behind the desk, a boom arm still within arm\'s reach, and a game running on the panel. Different hardware entirely. Identical instinct.',
    wide: true,
  },
};

export const chapters: Chapter[] = [
  {
    id: 'first-build',
    era: 'Summer 2009',
    railLabel: '2009',
    title: 'The First Build',
    subtitle: 'Thirteen years old, a pile of parts, and no instructions.',
    accent: 'cyan',
    paragraphs: [
      'The summer I was thirteen, I built a computer from scratch. Not a kit and not an upgrade — a bare case, a motherboard still in its anti-static bag, and the very specific terror of seating a processor for the first time with no idea whether the force you are applying is correct or catastrophic.',
      'By the time that machine settled into its final form it carried 16 GB of RAM and an NVIDIA GeForce GTX 480, and mechanical drives with actual spinning platters inside them. You knew it was working because you could hear it and feel it through the desk.',
      'It booted. That is the entire story, and it rearranged everything. A pile of components I had assembled on a carpet had become a working system that did what I asked it to. I have been chasing that exact feeling ever since, and every job I have held since is a version of it.',
    ],
    photos: [],
  },
  {
    id: 'salvage',
    era: '2009 – 2014',
    railLabel: 'Salvage',
    title: 'The Salvage Years',
    subtitle: 'If it was broken, free, or headed for the curb, I wanted it.',
    accent: 'amber',
    paragraphs: [
      'One build was never going to be enough, and I had no money. What I had instead was a reputation: I was the kid who would take your dead computer. Family, friends, friends of parents — when something stopped working it came to me rather than to the landfill.',
      'I harvested all of it. Memory out of machines nobody wanted, optical drives, hard disks, fans, heatsinks, power supplies, expansion cards. A dead laptop was not a dead laptop. It was a stick of SODIMM, a 2.5-inch drive, a usable panel, and a copper heat pipe I could learn something from.',
      'That habit taught me more than any course would have. You cannot fake your way through a teardown. Either you understand why the designer ran that trace there, routed that pipe that way, left exactly that much clearance — or the thing does not go back together and does not power on. I learned to read hardware the way you learn a language: by taking apart thousands of sentences somebody else wrote.',
      'By 2014 I had moved past assembling other people\'s boards and started building circuits by hand. A transistor, an electrolytic capacitor, a trimmer pot, and an LED that lit on command. Modest, and a genuinely different category of thing — the first time I made electronics *do* something rather than making a computer work.',
    ],
    photos: [
      'the-workbench',
      'salvage-teardown',
      'laptop-stripped-to-board',
      'blood-and-thermal-paste',
      'first-liquid-cooling',
      'first-circuit-lit',
    ],
  },
  {
    id: 'the-den',
    era: '2012 – 2014',
    railLabel: 'The Den',
    title: 'The Den',
    subtitle: 'A basement corner that kept growing, photographed obsessively.',
    accent: 'violet',
    paragraphs: [
      'The setup was never finished. It was a living system, and I documented it compulsively across 2012 to 2014 — every photo below shot on the same Galaxy Note II — because I wanted a record of every single configuration it passed through.',
      'It began as a corner: a television pressed into service as a monitor, a tower sitting on the carpet, a laptop running on the floor because there was no desk for it. Then a second panel. Then a third and a fourth. Then an L-shaped desk to carry more surface than sense. Then five displays lit simultaneously, all showing the same photograph of the same lake.',
      'Every change was a decision about airflow, cable routing, sightlines and reach — the same class of constraint I now think about in software as latency, coupling and interface design. A closed loop went onto the CPU in December 2013 because air had stopped being enough. A discrete sound card went in five weeks later, and that card is the hinge in this whole story.',
      'This is also the room I went to disappear into, and that is the honest version. Being immersed in electronics was the escape. It is the single thing in my life that has never once loosened its grip.',
    ],
    photos: [
      'den-first-corner',
      'four-screens-february',
      'desk-condenser-mic',
      'desk-goes-l-shaped',
      'blue-hour-battlestation',
      'the-den-september',
      'the-wooden-desk',
      'five-displays',
      'the-sound-card',
      'four-screens-may',
      'the-den-panorama',
    ],
  },
  {
    id: 'lan-parties',
    era: '2012 – 2014',
    railLabel: 'LAN',
    title: 'LAN Parties',
    subtitle: 'The one night the hardware had an audience.',
    accent: 'sky',
    paragraphs: [
      'Every so often I would host a LAN party. Folding tables down the length of the basement, everyone hauling their own tower and monitor across town, six machines on one switch, food on paper plates, and a night that ran until the windows got light.',
      'I hosted because I was the one with the hardware and the patience to make six different people\'s machines talk to each other. Somebody\'s network card would refuse to negotiate. Somebody\'s install would be corrupt. Somebody would arrive with a monitor and no cable for it. Solving all of that before the first match was, for me, the actual event.',
      'Video games were the reason everybody came, and they were the thing that shaped what I thought I wanted. At that point I assumed, reasonably, that I would end up building them.',
      'And it is worth saying plainly, because it explains everything that follows: I am a nerd at heart. Fan Expo in Toronto in August 2014, replica sword in hand, standing between cosplayers in full armour. The conventions, the comics, the games and the hardware were never separate interests. They were one impulse — find the thing you love and go all the way into it.',
    ],
    photos: [
      'lan-new-years-eve',
      'lan-in-the-dark',
      'the-crew',
      'fan-expo-sword',
      'fan-expo-cosplay',
      'fan-expo-jude',
    ],
  },
  {
    id: 'george-brown',
    era: '2015',
    railLabel: 'Games',
    title: 'Game Programming, George Brown',
    subtitle: 'The obvious next step, and the first hard course correction.',
    accent: 'rose',
    paragraphs: [
      'Games had shaped me, so games looked like the answer. I enrolled in Game Programming at George Brown College, at the Casa Loma campus, in 2015.',
      'One semester in, I read the syllabus properly and did the arithmetic. The program was built around browser-based games. In 2015 that was the wrong bet — the browser plugin era was visibly ending, and all of the momentum in the industry was in console and PC. I was being trained for a platform I believed was closing.',
      'There was a second, less philosophical problem: I was commuting from Mississauga to Casa Loma. Hours a day on transit, to be taught something I had stopped believing.',
      'So I left. It was the first time I made a decision of that shape — walking away from a credential because the substance behind it did not hold up to scrutiny. At the time it felt like failing. It was the opposite. It was the first time I trusted my own read of a technical trend over an institution\'s.',
    ],
    photos: [],
  },
  {
    id: 'mohawk-it',
    era: '2015 – 2016',
    railLabel: 'IT',
    title: 'Information Technology, Mohawk',
    subtitle: 'Right industry, wrong seat.',
    accent: 'orange',
    paragraphs: [
      'Mohawk College, Information Technology. One semester, and a genuinely valuable one — a broad pass across computer engineering, networking and software that filled in the formal theory underneath everything I had taught myself by hand in a basement.',
      'Then the destination came into focus and I did not want it. The path led to IT support: a career spent walking people who are not curious about technology through problems they have no interest in understanding. I loved the machines. The prospect of spending my life as the help desk between them and someone who resented them was genuinely infuriating.',
      'The realisation was sharper than "this is not for me." It was that I had mistaken *proximity* to technology for the work itself. Being near computers is not the same as building things with them. So I left Mohawk as well.',
      'Two programs, two exits, no credential, and I was nineteen. From the outside that reads as drift. From the inside it was the opposite of drift — I was declining to spend the next decade paying off a career I already knew I did not want.',
    ],
    photos: ['hamilton-room'],
  },
  {
    id: 'metalworks',
    era: '2016 – 2020',
    railLabel: 'Metalworks',
    title: 'Metalworks: Synth Rider and M E R C S',
    subtitle: 'Audio engineering, and the two names I released under.',
    accent: 'fuchsia',
    paragraphs: [
      'Metalworks Institute of Sound and Music Production — Audio Engineering and Digital Music Production. This is the one I finished, and it turned out to be the most rigorous technical education I had had to that point.',
      'Signal chain. Gain staging. Compression, EQ, sidechaining, bus routing, phase relationships, headroom, and the difference between something being loud and something being *big*. It is systems engineering with your ears as the test suite. Debugging a mix that is somehow wrong is precisely debugging a system that is somehow wrong: isolate, bypass, solo, measure, and refuse to trust your own assumptions.',
      'Walking into a room built from the floor up around the behaviour of sound will rearrange how you think. I loved that place. It opened up an entire discipline I had only been circling from the outside with a sound card and a condenser mic.',
      'From 2016 to 2020 I worked as an audio engineer and music producer. First as **Synth Rider**, making retro and synthwave — neon, arpeggios and 1980s nostalgia rendered entirely in software. Later as **M E R C S**, moving into bass music, which is a harder, heavier, far more sound-design-driven discipline.',
      'Most of that work is simply gone. MacBooks died and there was no budget for cloud storage, which is its own expensively-learned lesson about backups. What is scattered through the rest of this page is what survived, kept with whatever technical metadata came attached — because for this era that metadata *is* the documentation.',
    ],
    photos: ['first-guitar', 'metalworks-studio-6', 'at-the-laptop'],
    tracks: ['ocean-expressway', 'synth-rider-vocals'],
    clips: ['studio-session-2015'],
  },
  {
    id: 'humber',
    era: '2017 – 2018',
    railLabel: 'Humber',
    title: 'Humber, in Parallel',
    subtitle: 'General Arts and Science, majoring in philosophy, while the music ran.',
    accent: 'amber',
    paragraphs: [
      'While all of this was happening I was also enrolled at Humber College, from 2017 to 2018, in General Arts and Science with a major in philosophy. Two entirely separate lives running at once: late sessions in studios downtown, and coursework on argument, ethics and epistemology in the daytime.',
      'It sounds like an odd pairing next to a production career, and it was the most useful thing I could have been studying. Philosophy is training in taking a claim apart to find the load-bearing assumption underneath it — which is the same move as a teardown, and the same move as debugging. It gave me a formal vocabulary for something I had been doing with a screwdriver since I was thirteen.',
      'It also mattered later. When the decision about music arrived, I had spent two years being taught to interrogate my own reasoning rather than follow the momentum I was already carrying.',
    ],
    photos: [],
  },
  {
    id: 'the-studios',
    era: '2018',
    railLabel: 'Studios',
    title: 'The Studios',
    subtitle: 'One we built ourselves, and one hidden above a row of shops on Queen Street.',
    accent: 'violet',
    paragraphs: [
      'Two rooms defined 2018.',
      'The first, my dad and I built. He had moved into a new house and the basement room was bare cinderblock. I had just come out of Metalworks with a head full of room acoustics, so we did it properly rather than taping foam to a wall: bass traps in all four corners, broadband absorption on the walls, clouds overhead, acoustic insulation and matting layered behind *and* in front of the drywall, ducting run on the diagonal so sound could not travel straight out through the vents, and jambs fitted to the doors so the seals actually sealed. Then we balanced the monitors to the room itself. Building a studio with my father, using knowledge I had gone away to get, is still one of the things I am proudest of.',
      'The second was **669** on Queen Street — named, as far as any of us knew, for its own street number. Three floors of studios stacked above a row of storefronts, run at the time by an engineer everyone just called Dot. We always booked Room 2. From the pavement it was completely anonymous; nobody walking past had any idea what was up there. The twenty-four-hour convenience store across the road probably had it figured out, given how many of us came through at four in the morning once everything else on the strip had shut.',
      'It was also walking distance from **APT 200**, the hip-hop bar that was the pre-party and the after-party whenever an artist was in town that year. It is where a lot of the Toronto scene of that moment passed through, and where some of the people who went on to real recognition were still just around.',
      'The Saturday booking became a fixture that autumn — and the archive proves it better than my memory does. The photograph below from Room 2 was taken at 11:46 p.m. on Saturday, 8 September 2018. The session bounce filed as "She" is from that same night. Two files that survived on completely different devices, reunited by their timestamps.',
    ],
    photos: ['the-purple-studio', 'studio-669-lounge', 'studio-669-sept-8', 'studio-669-sept-22'],
    tracks: ['session-she', 'session-sept-15', 'sketch-sept-28'],
    clips: ['the-light-promo'],
  },
  {
    id: 'los-angeles',
    era: 'December 2018',
    railLabel: 'LA',
    title: 'Los Angeles',
    subtitle: 'Flown out to work, and the trip where I decided to stop.',
    accent: 'rose',
    paragraphs: [
      'Around December 2018 the studio work connected me to **Daxz** — Jahmar Carter — a producer who has worked with Drake. He flew me out to Los Angeles to work across a handful of studios and projects for a short stretch.',
      'I could not get over it. My first evening out there I stood in an In-N-Out parking lot under palm trees and it landed properly: somebody else was paying for me to be here, to make music. It felt like arriving. Like the goal I had been walking toward had actually turned up.',
      'The work was real and the rooms were extraordinary — one panorama below was taken at half past five in the morning with everybody still going, a friend from high school who had taught himself to produce, a friend from music school working in bass, and a rapper from home all out there with us.',
      'And it was on that same trip, toward the end of it, that I decided to finish at Humber and start moving out of music as a full-time career.',
      'The reason was the shape of the industry rather than the work. It runs on being cut-throat, and I am not a cut-throat person. The lifestyle wrapped around it — the parties, the drugs, the whole rockstar apparatus — was simply not something I could see myself surviving for long, let alone building a life on. Sitting in the middle of the thing I had wanted, I could see clearly that wanting it had not made me suited to it.',
      'So I walked, for the third time, and this is the one I am most glad about. It is the same decision I had made at George Brown and at Mohawk, and by then I had learned to trust it: leaving something that is working on paper because you can see what it costs.',
    ],
    photos: ['in-n-out-la', 'la-studio-night'],
  },
  {
    id: 'back-to-software',
    era: '2020 →',
    railLabel: '2020',
    title: 'Back to Software, and the Markets',
    subtitle: 'The lockdowns hand me two new obsessions.',
    accent: 'emerald',
    paragraphs: [
      'Deciding in Los Angeles was not the same as stopping. I finished at Humber, and the music wound down across 2019 and into 2020 rather than ending at a stroke — still engineering, still producing, but no longer building a life around it. COVID closed the venues and ended the sessions outright, and I let **M E R C S** go there rather than watch it thin out any further.',
      'With the music set down, I went back to school for Software Development — the thing I had been circling since I was thirteen, approached properly this time, with a decade of hardware intuition and four years of signal-chain discipline behind it.',
      'The setup came along too. The 2020 photograph is the same instinct as 2009, eleven years later: a chair worth sitting in, a studio monitor on a stand, acoustic treatment on the wall, a boom arm still within reach. Different hardware entirely, identical person.',
      'The other thing the lockdowns handed me was the market. The COVID crash was the first time I watched a system that large break in real time, and I wanted the mechanics rather than the headlines. That turned into self-directed investing through Wealthsimple and a durable interest in markets as systems — incentives, liquidity and feedback loops, which is not so far from anything else I have taken apart on a folding table.',
      'The pattern, if there is one: I have spent my life escaping into electronics, and every apparent detour — games, IT, music, markets — turned out to be another lens on the same subject. None of it was wasted. All of it is load-bearing.',
    ],
    photos: ['setup-2020'],
  },
];

/**
 * The surviving music catalogue, 2016–2020.
 *
 * Ordering is deliberate: confirmed releases first, then dated sessions, then
 * the unattributed masters. `attribution` is honest about how much each label
 * can be trusted — most of these files outlived every piece of metadata that
 * would have identified them.
 */
export const tracks: Track[] = [
  {
    slug: 'ocean-expressway',
    title: 'Ocean Expressway',
    alias: 'Synth Rider',
    when: '2017',
    duration: 395,
    source: 'MP3, 44.1 kHz / 265 kbps',
    note:
      'The one file that survived with its metadata fully intact — tagged as Synth Rider, genre synthwave, released 2017 as a single. Six and a half minutes, which tells you it was built to be driven to.',
    attribution: 'tagged',
  },
  {
    slug: 'synth-rider-vocals',
    title: 'Synth Rider — vocal version',
    alias: 'Synth Rider',
    when: 'Synth Rider era',
    duration: 220,
    source: 'MP3, 44.1 kHz / 192 kbps',
    note:
      'A vocal take, recovered from a video export rather than a session file — the encoder chain is still visible in the file header. The original project is gone.',
    attribution: 'filename',
  },
  {
    slug: 'session-she',
    title: 'Studio Session — "She"',
    alias: null,
    when: 'Saturday, September 8, 2018',
    duration: 234,
    source: 'MP3, 44.1 kHz / 128 kbps',
    note:
      'A rough bounce off the end of a Saturday session, named for the vocal it was built around. Bounced at 128 kbps because it was only ever meant to be a reference on the drive home. The photograph of Room 2 above was taken at 11:46 p.m. that same night.',
    attribution: 'filename',
  },
  {
    slug: 'session-sept-15',
    title: 'Studio Session — September 15',
    alias: null,
    when: 'Saturday, September 15, 2018',
    duration: 175,
    source: 'MP3, 44.1 kHz / 128 kbps',
    note:
      'The following Saturday. Between the bounces and the photographs, four consecutive weekends of September 2018 are documented — the 8th, the 15th, the 22nd and the 28th. That is the only stretch of the whole era with a real paper trail.',
    attribution: 'filename',
  },
  {
    slug: 'sketch-sept-28',
    title: 'Sketch — September 28',
    alias: null,
    when: 'September 28, 2018',
    duration: 42,
    source: 'WAV, 44.1 kHz / 16-bit',
    note:
      'Forty-two seconds. An idea captured before it evaporated and never taken further. Most production work looks like this and almost none of it is ever kept.',
    attribution: 'filename',
  },
  {
    slug: 'night',
    title: 'Night',
    alias: null,
    when: 'Unknown, 2016 – 2020',
    duration: 175,
    source: 'WAV, 192 kHz / 32-bit float',
    note:
      'Rendered at 192 kHz in 32-bit float — four times the sample rate anything needs for delivery. That is a mastering-stage export, which means at some point this one mattered enough to render properly.',
    attribution: 'unattributed',
  },
  {
    slug: 'rrp',
    title: 'RRP',
    alias: null,
    when: 'Unknown, 2016 – 2020',
    duration: 405,
    source: 'WAV, 44.1 kHz / 32-bit float',
    note:
      'The longest surviving piece at six minutes forty-five, kept in 32-bit float, which means it was still live in the mix rather than finished. What the initials stood for is lost.',
    attribution: 'unattributed',
  },
  {
    slug: 'demo-blind',
    title: 'Demo — "Blind"',
    alias: null,
    when: 'Unknown, 2016 – 2020',
    duration: 255,
    source: 'WAV, 44.1 kHz / 32-bit float',
    note:
      'Filed as a demo, in floating point, at full length. A track that made it to the stage of being shown to someone.',
    attribution: 'unattributed',
  },
  {
    slug: 'bp',
    title: 'BP',
    alias: null,
    when: 'Unknown, 2016 – 2020',
    duration: 212,
    source: 'WAV, 48 kHz / 24-bit',
    note:
      'The only survivor rendered at 48 kHz / 24-bit — the video and broadcast standard rather than the music one. Possibly cut for picture.',
    attribution: 'unattributed',
  },
  {
    slug: 'pre-master',
    title: 'Pre-Master',
    alias: null,
    when: 'Unknown, 2016 – 2020',
    duration: 246,
    source: 'WAV, 44.1 kHz / 16-bit',
    note:
      'Named for its position in the chain rather than for itself: the mix as it stood immediately before mastering. Which record it belonged to is unrecoverable.',
    attribution: 'unattributed',
  },
  {
    slug: 'untitled-110',
    title: 'Untitled',
    alias: null,
    when: 'Unknown, 2016 – 2020',
    duration: 110,
    source: 'WAV, 44.1 kHz / 32-bit float',
    note:
      'One minute fifty, floating point, no title and no date. It survived in two formats on the same drive, which suggests it was bounced to be sent somewhere.',
    attribution: 'unattributed',
  },
];

export const clips: Clip[] = [
  {
    slug: 'studio-session-2015',
    title: 'Studio session',
    when: 'November 24, 2015',
    duration: '0:23',
    note:
      'Shot handheld at 10 p.m. on a Tuesday: a spectrum analyser running on the left panel, the mixer open on the right, a pad controller lit up under my hands. This predates Metalworks — it is the evidence that the music had already started before I found the school for it.',
  },
  {
    slug: 'the-light-promo',
    title: '"The Light" — promo',
    when: 'Synth Rider / M E R C S era',
    duration: '0:30',
    square: true,
    note:
      'A thirty-second square promo cut for social, built around a featured vocalist, finished with chromatic aberration and analogue-video artefacting. Made in the era when a release meant you also shot and cut the trailer yourself.',
  },
];

/**
 * Slugs of the tracks that carry no date and no alias. These are rendered as one
 * closing block rather than mixed into a chapter, because their only honest
 * shared label is "this is what was left on the drive".
 */
export const unattributedTrackSlugs = [
  'night',
  'rrp',
  'demo-blind',
  'pre-master',
  'bp',
  'untitled-110',
];

/** Pulled out of the prose so the summary at the top stays maintainable. */
export const stats = [
  { value: '2009', label: 'First build, from scratch' },
  { value: '13', label: 'Years old when it booted' },
  { value: '34', label: 'Photographs recovered' },
  { value: '11', label: 'Tracks that survived' },
];
