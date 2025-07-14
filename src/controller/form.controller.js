import Loan from "../model/form.js";



export const loandata = async (req,res)=>{
    try {
        const loans = await Loan.create(req.body)
        return res.status(201).json({message:"Loan created successfully",loans})
    } catch (error) {
        return res.status(500).json({ message:"An Error occured while creating an Form", 
           error:error.message });
    }
}

export const getloandata = async (req,res)=>{
    try {
        const loan = await Loan.find()
        return res.status(200).json({message:"Loan data fetched successfully",loan})
    } catch (error) {
        return res.status(500).json({ message:"An Error occured while getting an Form",
            error:error.message });
    }
}

export const deleteLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLoan = await Loan.findByIdAndDelete(id);
    if (!deletedLoan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    res.status(200).json({ message: "Loan deleted successfully.", deletedLoan });
  } catch (error) {
    console.error("Error deleting loan:", error);
    res.status(500).json({ message: "Server error while deleting loan." });
  }
};

export const updateLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Fields to update

    const updatedLoan = await Loan.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated doc
      runValidators: true, // Enforce schema
    });

    if (!updatedLoan) {
      return res.status(404).json({ message: "Loan not found." });
    }

    res.status(200).json({
      message: "Loan updated successfully.",
      updatedLoan,
    });
  } catch (error) {
    console.error("Error updating loan:", error);
    res.status(500).json({ message: "Server error while updating loan." });
  }
};


// export const deleteloandata = async (req,res)=>{
//     try {
//         const {_id} = req.body;
//         const loan = await Loan.findByIdAndDelete(_id)
//         return res.status(200).json({message:"Loan data deleted successfully"})
//     } catch (error) {
//         return res.status(500).json({ message:"An Error occured while deleting an Form",
//             error:error.message });
//     }
// }

// export const deleteloandata = async (req,res)=>{
//     try {
//         const {_id} = req.params;
//         const loan = await Loan.findByIdAndDelete(_id)
//         return res.status(200).json({message:"Loan data deleted successfully"})
//     } catch (error) {
//         return res.status(500).json({ message:"An Error occured while deleting an Form",
//             error:error.message });
//     }
// }