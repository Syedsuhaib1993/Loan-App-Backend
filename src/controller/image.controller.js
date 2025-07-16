export const image = async (req, res) => {
  try {


    const imageUrl = req.file.path

    return res.status(201).json({
        message: "Image upload succesfully",
        imageUrl
    })


  } catch (error) {
    return res.status(500).json({
      message: "Image not upload",
      error: error.message,
    });
  }
};