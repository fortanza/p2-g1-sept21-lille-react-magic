import './LoreOfMagic.css';
import { Header } from 'semantic-ui-react';

export default function LoreOfMagic() {
  return (
    <Header className="loreContainer" as="h3" dividing>
      <h1 className="beginning">THE BEGINNING</h1>
      <br />
      <p as="h3">
        As it turns out, the game almost didn’t happen. In 1991, Wizards of the
        Coast was busy printing roleplaying games and supplements, and operated
        out of Peter Adkison’s basement. Adkison was the owner and CEO of
        Wizards when he was approached by Dr. Richard Garfield, a doctoral
        candidate in combinatorial mathematics. Garfield was interested in
        having Wizards publish his “RoboRally” board game design. Adkison liked
        RoboRally (and would later produce it through Wizards) but he felt at
        the time that Wizards didn’t possess the resources or technical know-how
        to produce a board game. He asked Garfield to instead come up with a
        simple game that could be played in minutes, and that was portable
        enough that people could play it while “waiting in line at conventions.”
        Garfield went back to his workshop and emerged with the very first
        version of the game we now know as Magic.
      </p>
      <br />
      <p as="h3">
        THE EARLY DAYS Adkison saw the potential of the game and asked Garfield
        to begin working on it in earnest. Garfield was still getting his
        doctorate at the University of Pennsylvania, so he used his free time
        and a cadre of volunteer playtesters to develop the game. Magic: The
        Gathering’s history as a global phenomenon started in 1993 at the
        Origins Game Fair in Dallas, TX. It was an instant success—players
        bought up the full stock of what had been believed to be a year’s supply
        of cards, and a reprint had to be ordered immediately. As the popularity
        of the game spread, Wizards continually evolved to meet the needs of the
        players. A robust tournament system known as the DCI was developed by
        Skaff Elias. It set standards for how tournaments were run, and kept
        track of player’s stats. It was among the first of its kind in the hobby
        gaming industry. In 1996, the Magic Pro Tour was born. The Pro Tour is
        an invite-only tournament structure offering over $1 million in prizes a
        year. To qualify for the series, there is a worldwide system of
        qualifier tournaments and large events that allow players to earn a spot
        on the circuit. The game was first published only in English, but that
        would soon change as Italian, French, German, and Spanish were added. As
        the game grew, six additional languages entered the mix: Japanese,
        Portuguese, Russian, Chinese Traditional, Chinese Simplified, and
        Korean.
      </p>
      <img className="begin" src="/assets/img/magicBegin.png" alt="cardMagic" />
    </Header>
  );
}
