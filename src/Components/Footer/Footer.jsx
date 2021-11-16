import './Footer.css';
import { Popup } from 'semantic-ui-react';
import useModal from 'Components/Footer/useModal';
import FooterModal from './FooterModal';

export default function Footer() {
  const { isShowing: isRulesGamesShowed, toggle: toggleRulesGames } =
    useModal();
  return (
    <footer className="footer">
      <ul className="socialContainer">
        <Popup
          trigger={
            <button
              type="button"
              className="socialBtn rulelogo"
              onClick={toggleRulesGames}
            >
              <img
                alt="Apprendre les règles de Magic: The Gathering"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgUlEQVRIie2Wu0oDQRSG/5OEqJVgYSV4QREUtFQQFG8PIGLrC6TyXcRW0EosfACFaGOpRlDwAhams1AsRf0ssguTNdndMdlU/rDw75yZ+WbPnt0Z6V8dkjVqBMYlDTSLNxGSqmZ2570KYAg4ozWdAoM+0CJQaREa6gooxvEKjl+XNBX4HUlHKda7q9oriWpa0pqkgzTgUcdvmdlHEhXojwmPxY11wXnHzwNJXEmKS2chJtY0eJyG2opyjr/JGtYQbGaHqhXFanBVsgTXpdrMrkMPvHYMnKA3SZeSvhrEuiXN+sznA54zs9tmQaAkaTvtZLnkLtnI54nPgQs1TnWPpJmswL2SFn0mbxfYt7hGgBXn/sXMkj9RoBzZcSYS+pdS7FobYf9OF9dkaLIsrn1Je4H/9e+PA0cBvsVVNbMToMtp+0wDfpS07AGKajPI0JLTdp84ChgG3ttzEgJSHIdc+ALw1AZomcgBMPH4CuRV2y77Uq22Xt+Sns3s4Q9j/9Ue/QAIGcO7BdCj5AAAAABJRU5ErkJggg=="
              />
            </button>
          }
          content="Apprendre les règles de Magic: The Gathering"
          position="top center"
        />

        <FooterModal
          isShowing={isRulesGamesShowed}
          hide={toggleRulesGames}
          src="Rules"
        />

        <Popup
          trigger={
            <a
              href="https://magic.wizards.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="socialBtn mtglogo">
                <img
                  className="mtglogoimg"
                  alt="Site officiel Magic: The Gathering"
                  src="img/magic-logo.png"
                />
              </button>
            </a>
          }
          content="Site officiel Magic: The Gathering"
          position="top center"
        />
        <Popup
          trigger={
            <a
              href="https://www.facebook.com/MagicTheGathering/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="socialBtn fblogo">
                <img
                  alt="Lien vers Facebook "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgaWQ9Im9yaWdpbmFsLWljb24iIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMTcuNTU0ODMsNjQuNWgtMTcuMjIxNXYtMTQuMzMzMzNjMCwtNy4zOTYgMC42MDIsLTEyLjA1NDMzIDExLjIwMTUsLTEyLjA1NDMzaDYuMjIwNjdjMy45NTYsMCA3LjE2NjY3LC0zLjIxMDY3IDcuMTY2NjcsLTcuMTY2Njd2LTguOTg3YzAsLTMuNzQ4MTcgLTIuODczODMsLTYuOTUxNjcgLTYuNjE0ODMsLTcuMjAyNWMtNC4zMjg2NywtMC4yOTM4MyAtOC42NjQ1LC0wLjQzIC0xMy4wMDc1LC0wLjQyMjgzYy0xOS40NDMxNywwIC0zMy42MzMxNywxMS44NzUxNyAtMzMuNjMzMTcsMzMuNjc2MTd2MTYuNDkwNWgtMTQuMzMzMzNjLTMuOTU2LDAgLTcuMTY2NjcsMy4yMTA2NyAtNy4xNjY2Nyw3LjE2NjY3djE0LjMzMzMzYzAsMy45NTYgMy4yMTA2Nyw3LjE2NjY3IDcuMTY2NjcsNy4xNjY2N2wxNC4zMzMzMywtMC4wMDcxN3Y1Ny4zNDA1YzAsMy45NTYgMy4yMTA2Nyw3LjE2NjY3IDcuMTY2NjcsNy4xNjY2N2gxNC4zMzMzM2MzLjk1NiwwIDcuMTY2NjcsLTMuMjEwNjcgNy4xNjY2NywtNy4xNjY2N3YtNTcuMzU0ODNsMTUuNTgwMzMsLTAuMDA3MTdjMy42NDA2NywwIDYuNzAwODMsLTIuNzMwNSA3LjExNjUsLTYuMzQ5NjdsMS42NDExNywtMTQuMzA0NjdjMC40OTQ1LC00LjI0OTgzIC0yLjgzMDgzLC03Ljk4MzY3IC03LjExNjUsLTcuOTgzNjd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                />
              </button>
            </a>
          }
          content="Facebook"
          position="top center"
        />
        <Popup
          trigger={
            <a
              href=" https://www.youtube.com/channel/UC8ZGymAvfP97qJabgqUkz4A"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="socialBtn ytblogo">
                <img
                  alt="Lien vers YouTube "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDIyLjkzMzMzYy0yMy45OTk3MywwIC01NS4xNDk3NCw2LjAxMzI4IC01NS4xNDk3NCw2LjAxMzI4bC0wLjA3ODM5LDAuMDg5NThjLTEwLjkzMDc0LDEuNzQ4MTYgLTE5LjMwNTIxLDExLjE0MDg1IC0xOS4zMDUyMSwyMi41NjM4djM0LjR2MC4wMTEydjM0LjM4ODh2MC4wMTEyYzAuMDIyMDMsMTEuMjY5NjcgOC4yMjkwNSwyMC44NTMyMyAxOS4zNjEyLDIyLjYwODU5bDAuMDIyNCwwLjAzMzZjMCwwIDMxLjE1MDAxLDYuMDI0NDggNTUuMTQ5NzQsNi4wMjQ0OGMyMy45OTk3MywwIDU1LjE0OTc0LC02LjAyNDQ4IDU1LjE0OTc0LC02LjAyNDQ4bDAuMDExMiwtMC4wMTEyYzExLjE0NDk2LC0xLjc1MTc2IDE5LjM2MDQ5LC0xMS4zNDkyMSAxOS4zNzIzOSwtMjIuNjMwOTl2LTAuMDExMnYtMzQuMzg4OHYtMC4wMTEydi0zNC40Yy0wLjAxNjU0LC0xMS4yNzM5MSAtOC4yMjQ4NywtMjAuODYzNzYgLTE5LjM2MTIsLTIyLjYxOTc5bC0wLjAyMjM5LC0wLjAzMzU5YzAsMCAtMzEuMTUwMDEsLTYuMDEzMjggLTU1LjE0OTc0LC02LjAxMzI4ek02OC44LDU5LjYxNzcxbDQ1Ljg2NjY3LDI2LjM4MjI5bC00NS44NjY2NywyNi4zODIyOXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                />
              </button>
            </a>
          }
          content="YouTube"
          position="top center"
        />
        <Popup
          trigger={
            <a
              href=" https://twitter.com/wizards_magic?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="socialBtn twitterlogo">
                <img
                  alt="Lien vers Twitter "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE2MC41MzMzMywzOS43NzIxM2MtNS40ODY4LDIuNDM2NjcgLTExLjM4MDY3LDQuMDc2NCAtMTcuNTY2OTMsNC44MTZjNi4zMTgxMywtMy43ODQgMTEuMTYyOCwtOS43NzUzMyAxMy40NDQ2NywtMTYuOTE5MDdjLTUuOTA1MzMsMy41MDMwNyAtMTIuNDUyOCw2LjA0ODY3IC0xOS40MjQ1Myw3LjQyNDY3Yy01LjU3ODUzLC01Ljk0NTQ3IC0xMy41MjQ5MywtOS42NjA2NyAtMjIuMzE5ODcsLTkuNjYwNjdjLTE2Ljg5MDQsMCAtMzAuNTgxNiwxMy42OTY5MyAtMzAuNTgxNiwzMC41ODE2YzAsMi4zOTY1MyAwLjI3NTIsNC43MzU3MyAwLjc5MTIsNi45NjZjLTI1LjQxNTg3LC0xLjI3MjggLTQ3Ljk0Nzg3LC0xMy40NTA0IC02My4wMzgsLTMxLjk1NzZjLTIuNjI1ODcsNC41MTc4NyAtNC4xMzM3Myw5Ljc2OTYgLTQuMTMzNzMsMTUuMzgyNTNjMCwxMC42MDY2NyA1LjM5NTA3LDE5Ljk2OTIgMTMuNTk5NDcsMjUuNDUwMjdjLTUuMDEwOTMsLTAuMTYwNTMgLTkuNzI5NDcsLTEuNTM2NTMgLTEzLjg1MTczLC0zLjgyNDEzYzAsMC4xMzE4NyAwLDAuMjUyMjcgMCwwLjM4NDEzYzAsMTQuODIwNjcgMTAuNTM3ODcsMjcuMTgxNzMgMjQuNTMyOTMsMjkuOTg1MzNjLTIuNTYyOCwwLjY5OTQ3IC01LjI2ODkzLDEuMDcyMTMgLTguMDYxMDcsMS4wNzIxM2MtMS45NjY1MywwIC0zLjg4NzIsLTAuMTk0OTMgLTUuNzUwNTMsLTAuNTQ0NjdjMy44OTI5MywxMi4xNDg5MyAxNS4xODc2LDIwLjk5NTQ3IDI4LjU2OTIsMjEuMjQyYy0xMC40NjMzMyw4LjIwNDQgLTIzLjY1LDEzLjA5NDkzIC0zNy45ODMzMywxMy4wOTQ5M2MtMi40NjUzMywwIC00LjkwMiwtMC4xNDMzMyAtNy4yOTg1MywtMC40M2MxMy41MzY0LDguNjc0NTMgMjkuNjA2OTMsMTMuNzM3MDcgNDYuODgxNDcsMTMuNzM3MDdjNTYuMjU1NDcsMCA4Ny4wMDkwNywtNDYuNjAwNTMgODcuMDA5MDcsLTg3LjAxNDhjMCwtMS4zMjQ0IC0wLjAyODY3LC0yLjY0MzA3IC0wLjA4NiwtMy45NTZjNS45Nzk4NywtNC4zMTcyIDExLjE2ODUzLC05LjcwMDggMTUuMjY3ODcsLTE1LjgyOTczeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                />
              </button>
            </a>
          }
          content="Twitter"
          position="top center"
        />
      </ul>
      <ul className="linksContainer">
        <li className="link">Home</li>
        <li className="link">About us</li>
        <li className="link">Lore of Magic: The Gathering</li>
        <li className="link">Random card</li>
      </ul>
      <p className="disclamer">
        <br />
        <br />
        Portions of Planeswalker are unofficial Fan Content permitted under the
        Wizards of the Coast Fan Content Policy. The literal and graphical
        information presented on this site about Magic: The Gathering, including
        card images, the mana symbols, and Oracle text, is copyright Wizards of
        the Coast, LLC, a subsidiary of Hasbro, Inc. Planeswalker is not
        produced by, endorsed by, supported by, or affiliated with Wizards of
        the Coast.
        <br />
        <br />
        Card prices and promotional offers represent daily estimates and/or
        market values provided by our affiliates. Absolutely no guarantee is
        made for any price information. See stores for final prices and details.
        <br />
        <br />
        All other content © 2021 Planeswalker, Made by Wild Code School SCCJ N.
      </p>
    </footer>
  );
}
