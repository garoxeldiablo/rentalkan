import { alatBerat, userClient } from "../model/modelling.js";

// Tampilkan data produk
export const dataAlatBerat = async (req, res) => {
    try {
      const dataAlatBerat = await alatBerat.findAll(); // Ambil semua data

      res.status(200).json(dataAlatBerat);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  // register user baru
  export const addUser = async(req,res) => {
    try {
        await userClient.create(req.body);
        res.status(201).json({message: "Terima kasih sudah mendaftar :)"});
    } catch (error) {
        console.log(error.message);
    }
}

// match user
export const login = async (req, res) => {
  const {email,password} = req.body
  try {
    // Find the user in the database by username
    const user = await userClient.findOne({where : {email, password}});

    // If the username and password match, send a success response
    if (user) {
      res.json({ success: true, message: 'Login successful!' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
