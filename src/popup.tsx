import { useIsDark } from "recomposition-api"

import { LogosTwitter } from "./icons/twitter"

function IndexPopup() {
  const isDark = useIsDark()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 210,
        padding: 8,
        backgroundColor: isDark ? "rgb(52, 52, 52)" : "#fff",
        color: isDark ? "#fff" : "#000"
      }}>
      <h1 style={{ margin: 0 }}>Blank Tab Modern</h1>
      <p>
        The easiest way to make new tab as <b>blank tab</b> with no options.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
        <a
          href="https://twitter.com/_2nthony"
          style={{
            textDecoration: "none",
            color: "#55acee",
            display: "inline-flex",
            alignItems: "center",
            gap: 4
          }}
          target="_blank">
          <LogosTwitter />
          @2nthony
        </a>
      </div>
    </div>
  )
}

export default IndexPopup
