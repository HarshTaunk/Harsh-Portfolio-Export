// Things I Noticed — photo stories. Add a story by adding one object.
// Images: Stories/_web-ready/<slug>/<NN>.jpg  (frame order = array order)
(function () {
  const L = 'landscape', P = 'portrait';
  const S = (slug, title, kicker, intro, cover, frames) => ({
    slug, title, kicker, intro,
    cover: 'Stories/_web-ready/' + slug + '/' + cover,
    frames: frames.map(([orientation, alt, caption], i) => ({
      src: 'Stories/_web-ready/' + slug + '/' + String(i + 1).padStart(2, '0') + '.jpg',
      orientation, alt, caption
    }))
  });
  window.HP_STORIES = [
    S('and-then-they-were-two', 'And Then They Were Two', 'A rooftop love story in eight frames',
      "Shot over a couple of years of rooftop evenings. The pigeons never agreed to be in it, and they certainly never read the script.",
      '08.jpg', [
      [L, 'Lone pigeon on a concrete pillar, pastel sky, a jet trail cutting diagonally', "Every evening, the same pillar. The same view. A plane drew a line across the sky, heading somewhere. He wasn't."],
      [L, 'Same pigeon and pillar, wider, misty town below', "He told himself he liked the quiet. Pigeons are terrible liars."],
      [P, 'Pigeon perched on a street lamp, sun glowing directly behind', "Some days he went looking — the tallest lamp, the brightest light. The light was never the problem."],
      [L, 'Two pigeons on the far left and far right edges of a rooftop, grey sky', "Then one grey afternoon: someone on the far ledge. Close enough to notice. Too far to say anything."],
      [L, 'Two pigeons on two separate rooftop pyramids, facing each other', "Two ledges. One long, awkward silence. Neither of them looked away first."],
      [L, 'Two pigeons on the same slanted roof edge, small gap between', "Eventually, the same ledge. Still a polite distance. Some things can't be rushed."],
      [L, 'Two pigeons on a rooftop point, one with wings flared mid-squabble', "Not every conversation went well."],
      [L, 'Two pigeons side by side on a rooftop, setting sun exactly between them', "And then, one evening, they were two."]
    ]),
    S('mumbai-diaries', 'Mumbai Diaries', 'One city, one very long day',
      "From the first local train to the last lights on the old stone. Mumbai doesn't pose for photos. You just keep up and hope something stays in frame.",
      '07.jpg', [
      [P, 'Yellow Mumbai local train at a busy Dadar platform', "The local doesn't wait. Neither does anyone standing on the yellow line."],
      [P, 'Packed city bus interior, hands on overhead rails', "Personal space is a suburban rumour. Hold on to the rail — and to your sense of humour."],
      [L, 'City skyline stretched across the sea, tetrapods in the foreground', "The Sea Link under a heavy sky. The city, stretching itself across the water."],
      [P, 'White sedan crossing a road painted in a white box-junction grid, palm trees', "Midday on a box junction. For once, the whole city is colouring inside the lines."],
      [P, 'Curved heritage façade in golden light, the Asiatic Society steps beyond', "Golden hour on the old stone. Everyone stops for the same photo — and nobody minds."],
      [P, 'BMC headquarters with its domes, part of the tower under scaffolding', "Even the landmarks are works in progress. Mumbai is always being fixed, never finished."],
      [L, 'CSMT railway terminus exterior in evening light', "Evening at CSMT. Well over a century old, and still the busiest address in town."],
      [P, 'Gothic vaulted ceiling painted with stars', "Inside, the ceiling is painted like a night sky. Almost nobody rushing for their train looks up."],
      [P, 'The Taj Mahal Palace hotel from street level, framed by leaves', "The Taj, from the pavement. Some buildings you photograph. Some you just stand under."]
    ]),
    S('the-last-twenty-minutes', 'The Last Twenty Minutes', 'Sunsets, and the sky showing off',
      "Every day the sun clocks out, and for about twenty minutes the whole sky gets to show off. These are some of those twenty minutes.",
      '07.jpg', [
      [L, 'Low sun on horizon, rays fanning through scattered clouds', "It starts quietly. The sun drops low and throws light around like it's closing up shop."],
      [P, "Sun sitting exactly inside a street lamp's glass", "Some evenings it borrows a street lamp, just to see how it feels."],
      [L, 'Street lamp against a hazy gold sky, the sun just behind it', "Another evening, the same lamp. It's clearly found a favourite."],
      [L, 'Rippled clouds across the sky, the sun sinking behind them, a pylon below', "The clouds line up like a brushstroke, and the sun slips underneath."],
      [P, 'Sun low over sea, reflection path across wet sand', "By the sea, the sun draws its own path right to your feet."],
      [L, 'Pink sunset reflected on cobbled paving beside a dark slope', "Even the pavement gets a turn with the colour."],
      [L, 'Dramatic golden textured clouds filling the sky', "Some nights, the clouds catch fire instead."],
      [L, 'Deep orange clouds burning over a dark horizon', "A few minutes later, they're still burning."],
      [L, 'Dusk with layers of blue and peach cloud over dark horizon', "Slowly, the blues come back — one layer at a time."],
      [L, 'A single contrail running straight down a fading dusk sky', "A plane draws one last line down the sky, late for somewhere."],
      [L, 'Pink horizon over dark rooftops, a few lights coming on', "The horizon holds on to one last strip of pink."],
      [P, 'Almost-dark sky with a thin orange horizon over building silhouettes, windows lit', "Lights on. Show's over. Same time tomorrow."]
    ]),
    S('look-up', 'Look Up', 'Lines, frames and the shapes buildings make',
      "Buildings are full of patterns most people walk straight past — lines that meet, frames inside frames, a sky cut into shapes. As a designer, these are the things I can't stop noticing.",
      '02.jpg', [
      [L, 'Railway station roof with iron lacework, skylights and a large ceiling fan', "Start with a station roof. Iron lace, skylights, and one very hardworking fan."],
      [P, 'Oval rings of mall atrium stacked upward to skylight', "Rings stacked on rings — a mall atrium that feels like a tunnel to somewhere else."],
      [P, 'Grid of kite-shaped panels strung between two tall buildings', "A grid of kites pinned to a façade, frozen mid-flight."],
      [L, 'Wedding canopy of striped coloured fabric with hanging marigold strings', "A wedding canopy: every stripe of colour running the same way."],
      [L, 'Temple gate shaped like a bow with arrows, pigeons perched on the string', "A gate shaped like a bow, arrows drawn. The pigeons sit on the string like they own it."],
      [L, 'Golden statue on a pink temple rooftop under a grey sky', "Some rooftops come with a guardian. This one brought his own flag."],
      [P, 'Silhouette of a person holding the setting sun between raised hands', "Sometimes the best frame is a pair of hands."],
      [L, 'Looking straight up between towers with a palm tree', "And when you run out of things to look at, look up."]
    ])
  ];
})();
