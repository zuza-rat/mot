const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(express.json());
app.use(cors());

app.get("/checkmot/:regNo", async (req, res) => {
  const regNo = req.params.regNo;
  const motCheckUrl = `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${regNo}`;

  try {
    const carInfo = await axios.get(motCheckUrl, {
      headers: {
        "x-api-key": "fZi8YcjrZN1cGkQeZP7Uaa4rTxua8HovaswPuIno",
      },
    });
    return res.json(carInfo.data);
  } catch (e) {
    return res.status(500).json({ error: `Something went wrong. ${e}` });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`MOT checker app listening on port ${PORT}`);
});
