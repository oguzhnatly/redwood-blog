# Personal Blog RedwoodJS
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![RedwoodJS](https://img.shields.io/badge/-RedwoodJS-BF4722?style=flat-square&logoColor=white&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAqCAYAAAAwPULrAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJ6ADAAQAAAABAAAAKgAAAADlbCQjAAAFBklEQVRYCb2YW4hVVRjH52jOpF0kzbCmwNEmUiscRCvLqDArUFFBKhONzBLxqYTwyUqyqIdU6EJkPQQlGYmBBSkqamrUiw9iEd4iRzHLdMrJS46//2Z/p3XWWfvsvc6RPvixvv3d1tr7rNtMU9MlkJ6engmwGfbDy3DNJSjbWAkGMRG+BV9OYlgKAxrroY5sOn0YdkCenCJgGQyso5u4FDp5FHZBrHSR8DoMiuuxYDSF18aOKBD/F7ZxBbts6lU0kLiOiNis0Ctw3JzlrNvOG7fB1sDXKGr6m8CFdQ/AT6RYC0yGZK7Q9oIXoBtiZCfB7VYffTQMs+foluRW+A4kx2GGFUEfAT9AnpwhYDH0Vi7tVbAKJP/AXKtZuCVpHBwBXz7BkGywtJfBEjgHIdmN8Q7rFP1+OBgIfAdbH4ur2RL4LOiNs+QwjkesCLp+oj1O8Hn016BZMbR9YTlcgCzZjmOw1axqcTbDe1nZAbtitfo0AM3NV2ED3G3F0cfCXigivxJ0p+VWtDj0trGyj4Tg1oBdC0dfMUa0D15nA3P3uZNmjGiHEjs5I34R9mQhZPhD5nMYz1Q5GHEJ3op5TWJXQ/LTqiB6eWKjT4SjUFQ6CRxVNTDXQMAiqDV51dnv8Jjlod8CmtSn4UVIfhHaa2EN5MmPBAyxejVbAp+EsxkV12O/XgVo9bUXgnZ/V3SNKs9F9Jnwhxvg6DvRs28tOKeCOtDNoZR2/BC6rjwmXSjz7K3Qb4KN5gy0mtwLnPhWnr/24r7kuW/anzb2n0Eb/39zlYdNYPIpiu1RHejaw1S0zeloDs9/QhH5hqAbndzneD4EK8BOjvHo7pd9IInHOBD8Ja+C7kq22EHY67k6nSBvlg3QbbE/CN3gykrr8CnXmuoabNXfAdi+CsTGmO51Byad5DcDBX6RT19nmhRHDqBPKpVKJxybqftMqaPtJqczkLcU2wfQ4/g0n8do5PrkEn3al+ByBdFqJT4Nn8OY1KbDfhXEirae5AZM2xtegQ9hqA0IXUfd92DyvAahY8YPHI1tl0XRaiVPcgrpL6uiosl/a/pyugSscxL9D6L74jz4AoZZf0mLYQC8C/+CL5qHz1gC+nzwF5Kfo2vTDenAtPB2+AHp837aKVa7qsU5G35Lg2s1SyyZIO2P/kqz3E0o/dOBDUHXKZAn6wlotfpJi6E9L8vzv8+z7VH3oGtOubKaB9srR6EfcZ05+hp/cFeT0JWT5Lu1u/dLv8xwdM0tiS4PdspMQHdPGfnzZFnF4NIOludlBfw6F22AV6LfZoXRp8NZiBHFV/6s6eDacORN8FBH5Su7DSytty0UnGP72K1RoZNY5Hpj9Y+haEsp3+HcYti1b22EC1BUOtwaFToV7ipQZQsxj0My4VUAvQWeAP0ZOMItyrMWm46o41BLNrt5QZ3s0F6kG4PmZLKZWiLP1rG/BW3FNxNanFi9gO6JWT93eZO3nKqW5Clgogk/B5I7l4LR+8AMKPKTadD6au1uRzyPhJVgR+ce9GSFu3FBnUDdr253nTzrzXUmHoVY0bzTy4z3avbDNg2qV6gbmKdTYBY0KlG3mqoLZY1BbsC3u4Y/z3WegBV5QXX7+WzN8AaELga1vupPOMfW3XFMIh3dBwegiLxNUHKKxPTRUCwd6jz+CLKkE0fw9Gio45hkBqDV5u9zn2H7///NHxo4AxkMa+EwBP/KCuXl2S4CBz9WUUeF12cAAAAASUVORK5CYII=)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4ef78bef-7499-4d4e-a2ed-00c1b4a02537/deploy-status)](https://app.netlify.com/sites/elastic-banach-521a38/deploys)

[Click here to see the live demo on Netlify!](https://oguzhnatly.netlify.app/)

## Getting Started
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.

### Installation

Clone the repo:

```terminal
git clone https://github.com/oguzhnatly/redwood-blog.git
cd redwood-blog
```

Install dependencies:

```terminal
yarn install
```

Create a local SQLite database and seed it:

```terminal
yarn redwood db up
yarn redwood db seed
```

Fire it up
```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911`.

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.
