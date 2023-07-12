import secret from "../models/modelSecret.js";

export const createSecret = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newSecret = {
      title,
      description,
    };

    // todo: save data
    const savedSecret = await secret.create(newSecret);
    if (savedSecret) {
      res.status(201).json({ message: savedSecret });
    } else {
      res.status(500).json({ message: "error" });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSecret = async (req, res) => {
  try {
    const data = await secret.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ message: "error" });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchSecret = async (req, res) => {
  try {
    const { title } = req.params;

    const renderDataByTitle = await secret.find({
      $text: { $search: title },
    });

    // si no se ha encontrado coincidencias dar un 404
    if (!renderDataByTitle || renderDataByTitle.length === 0) {
      res
        .status(404)
        .json({ message: "No se encontró ningún post con ese título" });
    } else {
      res.status(200).json({ message: "eliminado", data: renderDataByTitle });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteSecret = async (req, res) =>{
    try {
        const { title } = req.params
        
        const deleteSecretByTitle = await findOneAndDelete({ title })

        if(deleteSecretByTitle){
            res.status(200).json({ message: "Se ha eliminado correctamente" })
        }else{
            res.status(404).json({ message: "No se encontró ningún post con ese título" })
        }
    } catch (error) {
        console.error(error)
        throw error
    }
}