import { useState } from "react";

import formStyles from "./Form.module.css";

import Input from "./Input";
import Select from "./Select";

const PetForm = ({ handleSubmit, petData, btnText }) => {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const colors = [
    "Branco",
    "Preto",
    "Cinza",
    "Marrom",
    "Caramelo",
    "Tigrado",
    "Malhado",
  ];

  const onFileChange = (e) => {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  };

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleColor = (e) => {
    setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(pet);
    handleSubmit(pet);
  };

  return (
    <form className={formStyles.form_container} onSubmit={Submit}>
      <div className={formStyles.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${import.meta.env.VITE_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens do Pet"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite o nome do pet"
        handleOnChange={handleChange}
        value={pet.name || ""}
      />
      <Input
        text="Idade do Pet"
        type="text"
        name="age"
        placeholder="Digite a idade do pet"
        handleOnChange={handleChange}
        value={pet.age || ""}
      />
      <Input
        text="Peso do Pet"
        type="number"
        name="weight"
        placeholder="Digite o peso do pet"
        handleOnChange={handleChange}
        value={pet.weight || ""}
      />
      <Select
        text="Selecione a cor do Pet"
        name="color"
        options={colors}
        handleOnChange={handleColor}
        value={pet.color || ""}
      />
      <input type="submit" value={btnText} />
    </form>
  );
};

export default PetForm;
