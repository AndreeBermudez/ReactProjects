## ******Componentes en React******

```jsx

import React from 'react'

export const AgregarTarea = () => {
  return (
    <div>AgregarTarea</div>
  )
}   
```

## ******Props en React******

```jsx
import React from 'react'

export const AgregarTarea = (props) => {
  return (
    <div>{props.titulo}</div>
  )
}   
```


## ******Uso de Arreglos en React******

```jsx
// ***COMPONENTE DE PRACTICA***
import { useState } from "react"
const cursosDeProgramacion = [
    "Introducción a la Programación",
    "JavaScript Básico",
    "React para Principiantes",
    "Desarrollo Backend con Node.js",
    "Bases de Datos SQL",
    "Python para Ciencia de Datos",
    "Desarrollo de Aplicaciones Móviles con React Native",
    "Fundamentos de Algoritmos y Estructuras de Datos",
    "Programación Orientada a Objetos con Java",
    "Desarrollo Web Full Stack"
  ];
const AgregarCurso = ({nombreCurso}) => {
    return(
        <li>{nombreCurso}</li>
    )
}
export const CursosApp = ({curso}) => {

    const [listadoCursos, setlistadoCursos] = useState(cursosDeProgramacion)

    const nuevoCurso = () =>{
        setlistadoCursos([...listadoCursos, curso]) //El array [a, b, c] se convierte en a, b, c.
    }
  return (
    <div>
        <h3>Lista de cursos</h3>
        <ul>
            {listadoCursos.map((cursito) => <AgregarCurso key={cursito} nombreCurso={cursito}></AgregarCurso>)}
        </ul>
        <button onClick={nuevoCurso}>Agregar Curso</button>
    </div>
  )
}
```

## ******Inputs en react******

```jsx
import { useState } from "react";

export const AgregarTarea = () => {
  const [inputValue, setinputValue] = useState("");
  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(inputValue)
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingrese tarea nueva"
        value={inputValue} //El valor del input es el valor del estado
        onChange={onInputChange}
      />
    </form>
  );
};
```

## ******Comunicacion entre componentes (Hijo al Padre)******

```jsx
//Se le pasa la propiedad funcion setArreglo que modifica el listado del padre
<AgregarTarea agregarTarea={setArreglo}></AgregarTarea>

//El hijo recibe esa propiedad
export const AgregarTarea = ({agregarTarea}) => {

//Agarra las tareas que ya estaban y agregando el objeto nuevo
agregarTarea(tareas => [...tareas, envio])
```

## ******Comunicacion entre componentes (Padre maneja logica)******
    
```jsx
//Desde el hijo solo enviamos el valor
export const AgregarTarea = ({agregarTarea}) => {
 
  const onSubmit = (event) =>{
    event.preventDefault();
    agregarTarea(inputValue)
  }

//El padre maneja la logica mediante una funcion
const onAgregarTarea = (val) =>{
        let valor = val.trim()
        if(valor<1) return 
        const envio = {
            id: arreglo.length+1,
            nombre : valor,
            visto : false
        }
        setArreglo([...arreglo, envio])
    }
    
//Envio del método al hijo
<AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
```
## UseEffect en React

```jsx
import { useEffect, useState } from "react";
import { fetchdata } from "../helpers/fetchData";

export const useFetchData = (endPoint) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    const {data,isLoading} = await fetchdata(endPoint)
    setData(data)
    setIsLoading(isLoading)
  }

  //Dentro del useEfect no puede ser asincrono
  useEffect(() => {
    getData()
  }, [endPoint]) //Se ejecuta cuando el endPoint cambia

  return {
    data,
    isLoading
  }
}
```

## Hook contador personalizado
  
```jsx
import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

const [contador, setContador] = useState(valorInicial)

const incrementar = (valor = 1)=>{
    setContador(contador+valor)
}

const decrementar = (valor = 1, negativo)=>{
    if(!negativo && contador-valor <0){
        setContador(0)
        return
    }
    setContador(contador-valor)
}

const resetear = ()=>{
    setContador(0)
}

  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}

```
Imcorporamos el hook en el componente
```jsx
import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

    const {contador,incrementar,decrementar,resetear} = useCounter(0)

  return (
    <>
        <h1>Contador: {contador}</h1>
        <button className="btn btn-primary" onClick={()=> incrementar(1)}>+1</button>
        <button className="btn btn-danger" onClick={()=> resetear()}>Reset</button>
        <button className="btn btn-primary" onClick={()=>decrementar(1)}>-1</button>
    </>
  )
}
```

## Hook Formulario

```jsx	
import { useState } from "react";

export const useForm = (initialForm ={}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //Name captura la propiedad segun el input de forma dinamica
    });
  };

  return {
    ...formState, //Retorna todas las propiedades desestructuradas
    formState,
    onInputChange,
  };
};
```
Utilizamos el hook en el componente 

```jsx
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

    const initialForm = {
        userName: '',
        email:'',
        password:''
    }

    const {formState,userName, email, password, onInputChange} = useForm(initialForm)

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(formState)
    }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
```	
## useFetch

```jsx
import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  const {data,isLoading,errors} = state

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null
      });
    } catch (error) {
        setState({
        data,
        isLoading: false,
        errors: error
      });
    }
  };

  useEffect(()=>{
    if (!url) return
    getFetch()
  },[url])

  return {
    data,
    isLoading,
    errors
  };
};
```
Utilizamos el hook en el componente
```jsx
import { useFetch } from "../hooks/useFetch";

export const UsuariosComponent = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
      <>
      <h1>Lista de Usuarios</h1>
    {
    isLoading 
    ? <h4>Cargando....</h4>
    : errors 
        ?   <p>Ha ocurrido un error: {errors}</p>
        :   <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => {
                        return(
                        <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
      }
    </>
  );
};
```

## useRef

```jsx
const focusRef = useRef() //Creación de la referencia

 useEffect(() => {
      focusRef.current.focus() //Hace foco en el input al cargar el componente
    }, [])


 return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input
          ref={focusRef} //Referencia al input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
```	

## UseMemo

Se utiliza para memorizar variables y no tener que recalcularlo en cada renderizado. Se utiliza cuando se necesita realizar cálculos pesados.

```jsx
const getCalculo = (listaNumeros) => useMemo(()=>{
    console.log("Calculando");
    return listaNumeros.reduce((a, b) => a * b);
  }, [listaNumeros]);

  const agregarNumero = () => {
    setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
    console.log(listaNumeros);
  };
  ```	

## UseCallback + React.memo

Se utiliza para memorizar funciones
Al realizar un set, no incluimos el valor del estado porque lo aprende y no lo cambia, en vez de ello, usamos el contador que se encuentra dentro de la función setCounter

```jsx
    const incrementarPadre = useCallback(
        (val) =>{
            //No memorizamos el counter si no usamos los valores internos de setCounter
            setCounter(contador => contador + val) 
        },[]
    )
```
Usamos React.memo para memorizar el componente y que no se redibuje si no cambian las propiedades

```jsx
import React from "react"

export const Incrementar = React.memo(({incrementar}) => {

    console.log('Me redibujo')
  return (
    <button className="btn btn-primary" onClick={()=>incrementar(10)}>+1</button>
  )
})
```

## Logica de Reducer

Reducer es una función que recibe un estado y una acción y devuelve un nuevo estado. Se utiliza para manejar la lógica de la aplicación.

```jsx
const initialState = [{
  id: 1,
  tarea: "Explicar Reducers",
  finalizada: false
}];

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}

const agregarTarea = {
    type: '[TAREA] Agregar tarea',
    payload: nuevaTarea
}

const tareaReducer = (state = initialState, action={}) => {

    if(action.type === '[TAREA] Agregar tarea'){
        return [...state, action.payload]
    }

    return state

}

console.log(tareaReducer(initialState,agregarTarea))
```

## useReducer

Se utiliza para manejar la lógica de la aplicación. Se utiliza cuando el estado es más complejo y se necesita realizar acciones más complejas.

```jsx
import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Explicar Reducers",
    finalizada: false,
  },
];

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }
        return tarea;
      });
    case "[TAREAS] Eliminar Tarea":
      //Filtra todas las tareas que no tengan el id
        return state.filter( tarea => tarea.id !== action.payload)
    case "[TAREAS] Borrar Tareas":
      return [];
    default:
      return state;
  }
};

export const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (event) => {
    event.preventDefault();
    if (formState.tarea == "") return;
    console.log(formState);
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
    };
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finalizarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const eliminarTarea = ({ id }) =>{
    const action ={
        type: "[TAREAS] Eliminar Tarea",
        payload: id
    }
    dispatch(action)
  }

  const reset = () =>{
    const action ={
        type: "[TAREAS] Borrar Tareas",
        payload: ''
    }
    dispatch(action);
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <label htmlFor="tarea">Ingresa nueva Tarea</label>
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Ingresa tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={reset}>
          Reset
        </button>
      </form>

      <hr />

      <ul className="list-group">
        {tareasState.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item.tarea}</span>
              <div>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                />
                <button 
                className="btn btn-danger"
                onClick={ () => eliminarTarea(item)}
                >🗑️</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
```

## Instalar React router dom

```bash
npm install react-router-dom
```

Implementar el BrowserRouter en el archivo index.jsx

```jsx
  <BrowserRouter>
  <StrictMode>
    <App></App>
  </StrictMode>
  </BrowserRouter>
```

Crear las rutas en el archivo App.jsx
Cada ruta se define con el componente Route, el cual recibe dos propiedades, path y element.
Dentro de element se define el componente que se va a renderizar cuando la ruta coincida con la url.

```jsx

export const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
      </Routes>
    </>
  );
};
```

La diferencia entre Link y NavLink es que NavLink permite agregar una clase css cuando la ruta coincide con la url actual.

```jsx
<NavLink to='/about' className="nav-link">About</NavLink>
```

## useContext

El hook useContext permite acceder a un contexto desde un padre sin necesidad de pasar props a los hijos.

Primero creamos un contexto con createContext
```jsx
import { createContext } from "react";

export const UsuarioContext = createContext();
```
Despues, creamos un provider que va a contener el estado y las funciones que van a modificar el estado.
Como prop del Provider se pasa el valor que va a tener el contexto.
A traves de value se pasa el estado y las funciones que van a modificar el estado.
```jsx	
import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"


export const UsuarioProvider = ({children}) => {

  const [usuario, setUsuario] = useState({})

  return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
      {children}
    </UsuarioContext.Provider>
  )
}
```

Para acceder al contexto desde un componente, se utiliza el hook useContext
```jsx
const {usuario} = useContext(UsuarioContext)
const {setUsuario} = useContext(UsuarioContext)
```