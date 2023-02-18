const router = require("express").Router();

const Cat = require("../models/CategoryModel")


//Create new Cat
router.post("/", async (req, res) => {
    const newCat = new Cat(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(newCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get total number
router.get("/count", async (req, res) => {
    try {
        const totalCat= await Cat.countDocuments();

        res.status(200).json(totalCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update Cat
router.put("/:id", async (req, res) => {
    try {
        const category = await Cat.findById(req.params.id);
        try {
            const updatedCat = await Cat.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json("Updated Category!");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete cat
router.delete("/:id", async (req, res) => {
    // try {
    const cat = await Cat.findById(req.params.id);
    // if (faq.username === req.body.username) {
    try {
        await cat.delete();
        res.status(200).json("Categary has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
    //     } else {
    //         res.status(401).json("You can delete only your faq!");
    //     }
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});


// Get cat
router.get("/:id", async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id);

        res.status(200).json(cat);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all cat
router.get("/", async (req, res) => {
    try {
        const categories = await Cat.find();

        res.status(200).json(categories)

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;