const express = require("express");
const app = express();
const cors= require("cors")
app.use(cors());
const PORT = 8080;
const MongooseConnect =
  "mongodb+srv://AytacRzayeva:Aytac123@cluster0.xz3ku7i.mongodb.net/";
const mongoose = require("mongoose");
app.use(express.json());

const drimoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  }
});

const Products = mongoose.model("Drimo", drimoSchema);

app.post("/add", async (req, res) => {
  const newpProdct = new Products({
    ...req.body,
  });
  await newpProdct.save();
  res.send(newpProdct);
});
app.get("/add", async (req, res) => {
  const data = await Products.find();
  res.send(data);
});
app.get ("/add/:id", async (req,res)=>{
    const {id} = req.params
    const target = await Products.findById(id)
    res.send(target)
})
app.delete("/add/:id", async (req, res) => {
  const { id } = req.params;
  await Products.findByIdAndDelete(id);
  res.send("product has been deleted");
});
app.put("/add/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Products.findByIdAndUpdate(id, { ...req.body });
});
mongoose.connect(MongooseConnect).then(() => {
  console.log("DB CONNECTED");
});
app.listen(PORT, () => {
  console.log("App running");
});