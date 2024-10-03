import { Link } from "react-router-dom";
import "./stylesCSS/header.css"

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEXsYKP////l5eXk5OTu7u74+Pj19fXx8fH7+/vr6+vsW6HrWJ/xlcHrVp70rs7sXaH+9fntZabtbqv62un++PvuerLxkb798ffucaz50OP63uv0qMvk6ef97fX3w9v51eb75O/wirrymsPzosj2vNfueLDvgbX1s9L2vtjuxdjwhbf3/frs3uXr097vuNHuw9fo4eXp1d7n3+P4yuDsytqdll1fAAATqUlEQVR4nNVdi3bqKhDF+IqkEROfVazxXR9tPVf//9sugVhNMsQAsU1nnbU8C02aHWBmsxkAVSqVumVZdfZZtawa+6hZVvWu1MpZ2kiV2pTSQ2U4vew+J8uXl/V6PUKhjdb9zcvLYvm1C4Jhk/0o/O3tDi320YzuYF5aRU9CyJ6617lsl/P+2ieug5kRQpAw9r+wwHGJP1rPl9ug12Nv45kIq1YVQKhRer07Pe7Oyz1yY7gg41gR9ubLz8vpADyfVYWeOk9p9YqwXq83arVag32yjyb7aLJP7dJmwx6OJxsfOQ7OQJYEih3H8+cr1mib5s8QL0XsBfDKqCaqSKm09V06fZv7rOqy6i0DpjtanjsH61oZ1VhlaJRWWSmCu5lGl2Qu4+O89/TQfaN0iDf4/KBAg1XqfHelxdXhqR12PAN0t6r09m+94uqwkNZ+aJ1fWO2Zw4sMO/5iVj8U0w+L8KXD9rpAeNyYi92vercuaeBLTeMhtYIlckz6nsyw600ulBYTD6uiXqpRN6tW85Ty+5x2G+Q8AR434qD55btDhfVSFU9dreYvRYqwYqXUOs+Lbp4Jw858R9VhVQuJFra1Gz0ZH8dINhfDaKFL1br7p3Q/ACNeBPoEDmk64kOw+IH6u5qDJkFTM3DEo0XuMN9bPs+/gOb67yph3jhavI5+Fh8z4u5nDfPRU646pNMXI+6paxgtj1SdwCn3Q9t++/kKvGL0d3ZTuR8q+tLmdPErFSiMkMWJ5qFq975ULR7SN/+3KlAYXu+oYjxU4TTW6eWHQqDcCFnW1DhNfqrGXMzG/WV8oTnzf1SFl+aPFvQT/VyMzzLmcKARR9VQa2tavxMjICNkUocQggQu7xjfPu3LUYHCnEWnYK2NfozKBJC11P6RZlA1Za2NfnnlAsggjjLGVMpa2+ETlaUL3gx7s1wELk8/bLZLCJD5G3RuFqK1WbRdhigIGCGfTQlVUxs9LcvWBW/mtB8TuMecZlDSGuTmrh5zmmxPY1UH5a3B0JwJNYsWdFnmGgzNbYPTjnm1tma73DUYGn7LJnCZY/xDWb3ovRH0egiftwaiqGVqbfSz/DWIwkmcXRaBy4gW9KuUgT5txPt4GC2gOrQ/vL8BMOSoHQ2trVlb/4k2yg3vbygaubW2+e9KTmqGF1RVa6OLv1ODoTnbmiwewlTtj7jROyOzSpbWlvQ01vTPeJmrkdFR4mnAaHHa/LUqZO1038qvtdHJH+AyKXO2oMYIjfGbX3/Jjd7ZxzdVy9ba7M7or3VCYXjTsnKNnuzFH61C5C5pHq2Nfv09L/Ntl/QUarofDv2/2UZDw/3GvdbWgLW2P9tGQ3O3j7W2199+SEML6COtrf+HeyEzPGhla22HUgozjgsZ/KRuUutPRIugjHzUW70BdoZHP6TfydTaJiV0M3hTAe0MU0vmbGRaW6tuByWsQYQnMMI3GCHxpvWWVGubl7EXul0lhMhZ1GTRgu5K2EZZnQzVEDIGLhs90VKOCvGc45m9Jk06J+YsKrDW1pyVESAb9oUAp57rJCzDZwRNUGuzyjnN5PFu+KrSgZwFhbQ2+lFKgMTrhQjbai7iH6S10VI60ms33CjFMbyggNYWeM96SCNz30OAHbWLiN8BooViO/gpcwIeGRQfznlvpKJFp4yMNKSZPBqqZkvgTS2mtbVqrcOqnAIifgkB9tS6ITNnF9LQENv36GldyioUc9gsGipfN6gktLZyRnvWSoOMYUTWdX6Q0NpKqs4Qn8cKjYmwMNNGjIAbjXqj1jyVVGDDS45QQ6ImazaCanxrbaWdTHPPIUCtUE0u1n08LCclZaSUd8N3nS6El/QuHv4rJ59h0dDW7IZhM/2vEmltzJeq+CqcHMV8G84wkmEZfysc6VWGepEMC+lUIFR5SZPI2nf/RMHiRWqDvtxG8tfivvJuqOfnnfYNYU/BkzpTWFN4YLbcKj258Wu3ek6CrGmktbUarwq3wFsthCamO6zzPq5a20GF10bjtR+0jm6sdlZXXzrsK9yCjCTS19NspodPcFOBMFBqBeHEALtynLbpVIAfTtNmgHCrO+ph42ChtTXflW7Bs8crFd9Lme+vOZIl+1/SPD5UH4/S5m864Ver+SBlXOzu6asr7muTa22KCV6kzxECLIhFtkC89HTMc/l76aL0N3jNES7cVLBwOcKOPhvBEyqihSKvJbyiQJKAeQuGxGihenaha/a8poCo7o7Db1QcffJJ+yHCqnVRfEkOb3AB9JUgytAzZSDko3ggeyDSEScGCP3/uNamJLaiK5XqQQ44HJQxHMArkyMU3wC8RUCvGE01jCuhL90qIiR98W6BywT4KRDAMuqQ1/ss3bId/roCk5Gr83YIESqPnBzeP87AX8aLEDxEAjMQdmUhQXRDE4XMmbA6tNUpg2iLkEgbjXYAryFHiDpwiyC+tKnkNrzv1JB1VG7nwvtVgGWzxOPfABFMipCMbLi3ZXT3/OYdK4iqysnhdSJGA+0H82+W6VtKEXLZjxGIFBCX64hDM/EBhwg11HzhHLrA2xUaPHBLKUKHh/Vh2v1iIecbInyvoIOGRCCeqgN1t1dJyJciFDMv43Q03PBuaLj40dk2kc7oC+/5X38Buhuv3bFCHYphfNoxCx3RsBuGchSCHN/jC6eSFuTw5wKSVqQIvTHcp4WcH6g/W8zIhqKpTkKwYGdTGQ8BKNgVYfIL4vMRV1pyF+xXnm+Rz8jIQh86FwoH2Oun5DV3L3po+gsxtkiXjzhH2CdHFo4viztqCP0h2mltNcqfq9LrJK3HowXwRYdfYANX8AskvweCiKJ5AdrptQPee55uaReraiRAX1oI3Z9R3FbGM2JuF+ndJGIizzbz5WXuF1IdO0VGej8AsIDcAucTab4mobhNByn5npcH6XIxTZaS+5f8Ta2Svx9wyjY2zy3AS6Q5ryYoR2eUdP9CPQq8VLmIFiRZLGStfkqG4lFSs33dm7PVRRgpbqkWECFPEWkJp5FMLkXCegHbGrE6VM7juBqcyROlLKc6kAShEF+DZLFw1UWsbcEvSDfLRDL/HKUWpN6+BKEYBKbEOb4gtDIrILcAL5AueY+UsPQL6oGtV4LQ41CS2msox1eU8xHhx5xrI4wEi5SM4sFjYBnCALqJ6IZ2EcmSeKCNECGukXWTDl1IZ6nREIyQjHhlJb2dI5W6lM0EYZSdnBx8CYUjpQFKEHKPbCefwdVMhAKMIdTOZ4s8eur9C1UiXz+M9LREaTRmLGT3JuZptBESfwpFZWcC+lgYYdQOkt2Q4zaT87/v9YIMZue4Hxynbgk2XglCLtIkJ06cN/AlaRlDCMhJOU1oMslBqlCpUgmhMELR4VbJR+gW1g0RnhggJGuIuJEN70TJpiHxNFOgw0WkoZhFZgyhSX+GXF7UPZMvDkQYaaIJZyW6oV1MSq8z0RwBi0cB+4tQGpPzmiBC4Y57CYoX8cFicgnZCNiAGkXErR9fr+NGAmg8502MnmaJQjHdmFjwIzrne0EIZ7pKVGhkzbvc66R9bxP+gEE7bhPuPaZQ4XAbL13p5yOmzQmQyYo88bafYtCkiJYF6GJw9RNz3JJhVtOIHyCTwCpboVuAqWUxyRGu/0MmG5lEkeEZph+mEwhbqGIyf4U560rmuPFHDLqxsi5/F734D0U3jpd1ufdSyXjNfMABRQeTcaag2b11PL2Ng1mw4e2diS7b9e4LcZTVFTOxrrmoBS7O8oCoCamJUmte7v0xETOCCdLlArNrIqdjFvth1PCL2tqBEQ1EjURJB8hxA5PbIE4juME5BkYy6tR+vlkFWR8mLV6Md4exMlA/gxBiQNLBnPsUtkdOmIuRGmGr3UFMlcaYpVBZxvEoBCAkI4CjiwaQUn80jaw7FkoRX7VbiJzoWKcTsnciuQ1CyDtxUlHTWdcsNTzoMYRmoUdIa7EmKeq103+EMJrzj9GzaNauqK0P2F+tovrBiD4IfxgLX1EuyuYRQhFqpsDt1BdUSgyf6y1k0YtJr46I231Ti6SyeOOH6lAML+PvN90kTMy78Czoo5nj4nBiCjAGxEAIIXcqsRYUKcRF7ZJDfLEqiBrlHeH0iDzSl2KVAyEcppxK5JqL2vuAcTa+hvRglsK5TPkVwVbPjxB6dipYCB1xWlQjdd8PjWa4ogTIQM5vEXG7T7gUz9l9gDC6MOZKC5TzQ8PTaM2MmesiqSxJwUumDxBGiv69EyDR0ouC6lBsihUitI3CjyBpU3Q3Oc8DXSc2lZ+exxclY3T/IyHnG+YjflsYjsQa0qZRYk4UpBep1TzL+wU+8ygX466EB4bxy/2PwHkCbSOfNFph2QyMbuQVnFpTVDck3vG2StZoS1YR14qzorohnos1pK1Wq2kbxYtoMVthVtQmK+6q1mrVbLEe32gDpWhxQlFW2K544jyBaMeBk5H78sbD4qxT2Mhpf7enguEe8yS9oNLAChtXtKM9FZrMGnWzVNWs7QSUrSCAyJvWObbr/jRFRdnSWBimY/u1aS8nvjOCOY1RPMiTXUUwcYo+XDFcxxHbr+1o3PyJ6w+259lstdwonGeNXX/BrjpvF33JprKaT7Pu3e/XxrAeTCcK8OjtulC/Nx7kPM+TuJvZ9apOd15gPeIJC/ehp7GuCG2zfFziTmLcbZbrVGTivcVC4bm4UxbJMb27p8kAg6BzIm53cqjWxEvuvRoUdbYNfrntSGfbdoMxt8bhbBBpxag+Zr39o/ulAVYqw4IOA8WzEFTdtuu3/dpMBCkHmgsePqLzIGMfFxLwydoCzkag2vRbMhX8YBV8lFKVtEIOQnPeKXQ2wlGX1LuS4VN2z/bgNIciUhTI6GTddixvMAvJTaNRB5bv5rpfXzIEzlxoHiXjpE3zKe7NWR0aTQFKaG3XnZI/9PqAdHwILO69GU5636ulUlOVjS8Ph3e71txaMO1IhfWyIobTkV2lietmfPIDPhvhn15PlOYNZUygRysYAUvlRKsa64WV+NkI33tBay7DwdJtlTIGs3KExjqN83aIDgpspU8O0EryKBhhzxAh3meejaCzwJ9otVL/Wa2UzBJnI3Ctzbab7DMkcBpHlBCpp8maP3+Wp8GDkKoxGsrQtL61ttvJck0NX50RLTJqw5W9F2gzCgXzPuiDk+XUI0a0UC9tmeK1dJ2tWcR3V/BJOnenA2qksmiyNjjrzyyVBvd7qdMBI3bzTXIan8rvUMK8oU2I7sxZgFeZMW98adxoaCOmtd3OIdU4qATMpH2Y1gmOngI9ZNdbLhKnkoHnkFKNvaeAEfDjJa4EGF0ERnNExD/mOodUI8GGeCkVI8dRtNhP7swQmA3xyY5KziGNfOm1OlvqeWAEt2PxrZtLcCHo3b6/6s03AogX4THrrW9fGtfaYqd0/qfBwJ3Ru4aa6Gxer2+mMzNUE/HolP8c0i+NP0Bcb7A9n9/elhsFbRc7o8WKXbVaro0V4Qt8DulVaxMkJyJwNT3Nhqv6rrqqj11sruq7bXqjaoKGxrW22zmkvEv+uSP0nFAVSZ5aLTmHlA/3NQfDv2Z4fapITq2G67BKL+U8LEFiBH2AJ4/HtbZGjMAdzHe/+UEjrwcQRUJrq8YarP2HTlcP1zrEqNrDc7l5gz0VsLXIzxjXXm3LyjiX++4c0huBs05/xKE68xRVk2ptCQI3LWgm6LkW5pUnqZpUa0s22CC1R175DIcrWZNNU661JZxO81J6iJgvlEohlGttCQJXu5Q88uPREaJqcq0tHfzHpa5F7I1BqpYvWkSluxLXIh4Ft6aZGS0y6rBCL8VlSBRs2D9KqFqW1pamPoeZ2dD7aeaspzKqlqm1xQiceBHTUkJ0B0MpVcvU2oAuaR835aPheN6Rd75srQ0gcNVTDunsZ81dZFG1B1obROBKdiY5Qau0qnZH1R5pbd/y9z29+SxRYMQ8dyCjaT7S2kCnQy+l8Tdu/98hm6o91NoSBE4QotqxJJ3RWbSSqpqdoGqPtbZvTxNX4CaKSuEzDKMVEBcSVO2x1gYTOIu11N+uRrz+oJWHVC2H1iYppadl0QnZSkbI4kRlqpqi1iYrbXz9YjU6o8tB8XlBrS1ZcfFSelwoZKoXaRgv/qOA1wSomtLoCeios/UvHABNnP4Hzep86lpbRmln++PViP33SgMgZTBVy6u13Zc27kspDeY/ihGTxT8KkLK6hKplaG3VLAIX++1s82PBEeN5N0dc0NHasks/R+5PYCRu/1VOyh6WPtDaJARO0CR6WvlPj44Yr3etA0jKYKqWLNXzNLw0fGm17ajQ5UpJY/V3zu1TJJ5GJ1rcSpvU+tw4z8LooM3OAkYRGtEim6pll9JKd4Ge4HSI4y27lD4iZUVobQ9LG41ju19s8CCs+ran+z+q9WSR1gZXUR4Cd1famw2YUyimJgnGrPpsmouUFaO15euS/33OfdcYJMGuN/jM3c0K09ryuFWLWsPzwCcGjgc7yF/MjpTmd5XFaW0yAhcrpZSezpM9YlWpXJdh5c3bO4vWKg9ImUpppLXJiExeAsdLb7h7x7flyEf5Wyx2XOT1l6/DXiWZw6xJ1bS0tjyl31GS0ml3tVyLzWek9UnC7Wocx9sv38KmWYeeWo+q6WltiqWHSv10/DivFvv+yPOQ44Y7PuPrfs9h9ps3Ws+X293x1GO/1SVlD0sL9DRgaVidlc50fNntvrbbbbhtNPto7752QRB02JeH4nwKXPo/5HfuiLqj4MoAAAAASUVORK5CYII="
            alt=""
            className="imglogo"
            />
            <h1>Shoping Mall  </h1>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/us">US</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
