import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import swal from 'sweetalert';
import "./CheckOut.css"

const CheckOut = () => {
  const { items, setItems } = useContext(CartContext);

  const initialState = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);
  const [pedidoId, setPedidoId] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect (() =>{
    if (pedidoId != "") {
        swal(`Tu pedido fue registrado con el ID: ${pedidoId}`, "¡No olvides guardar esta información!", "success");
        setItems([]);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pedidoId])

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target["vemail"].value != "" && values.name != "" && values.lastname != "" && values.phone != "" && values.email != "") {
      if (e.target["vemail"].value === values.email) {
        const docRef = await addDoc(collection(db, "Pedidos"), {
          ...values,
          productos: items.map((item) => {
            return {
              itemName: item.name,
              itemQuantity: item.quantity,
            };
          }),
          total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        });
        setPedidoId(docRef.id);
        setValues(initialState);
        e.target["vemail"].value = "";   
      } else {
          swal("Los emails ingresados no coinciden", "Por favor verifica la información y prueba nuevamente", "warning");
      }
    } else {
      swal("Todos los campos deben ser completados", "Por favor verifica la información y prueba nuevamente", "warning");
    }
   
  };

  return (
    <div className="formContainer">
      <h2>Completa el formulario para finalizar la compra</h2>
      <p></p>
      <form onSubmit={onSubmit} className="form">
        <input
          placeholder="Nombre"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <input
          placeholder="Apellido"
          type="text"
          name="lastname"
          value={values.lastname}
          onChange={handleOnChange}
        />
        <input
          placeholder="Teléfono"
          type="number"
          name="phone"
          value={values.phone}
          onChange={handleOnChange}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <input placeholder="Verifica tu Email" name="vemail" type="email" />
        <button type="submit" className="btnAdd">
          Finalizar pedido
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
