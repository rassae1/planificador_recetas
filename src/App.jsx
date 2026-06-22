import { useState } from 'react';

// Tipos de comida
const tiposComida = ["Desayuno", "Comida", "Merienda", "Cena"];

// Datos de recetas reales extraídos del PDF
const recetasIniciales = [
  {
    id: 1,
    nombre: "Ensalada Templada de Lentejas y Huevo",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Lentejas escurridas", cantidad: 240, unidad: "g" },
      { nombre: "Huevos cocidos", cantidad: 1.5, unidad: "ud" },
      { nombre: "Taquitos de jamón", cantidad: 25, unidad: "g" },
      { nombre: "Espinacas baby", cantidad: 80, unidad: "g" },
      { nombre: "Aceite de oliva", cantidad: 5, unidad: "ml" },
    ],
    raciones: 1,
  },
  {
    id: 2,
    nombre: "Bandeja de Tempeh con Salsa Dulce de Cacahuete",
    tipo: "Cena",
    ingredientes: [
      { nombre: "Tempeh", cantidad: 150, unidad: "g" },
      { nombre: "Copos de chile", cantidad: 0.25, unidad: "g" },
      { nombre: "Aceite de oliva", cantidad: 7.5, unidad: "ml" },
      { nombre: "Crema de cacahuete", cantidad: 16, unidad: "g" },
      { nombre: "Tamari o salsa de soja", cantidad: 15, unidad: "ml" },
      { nombre: "Zumo de limón", cantidad: 15, unidad: "g" },
      { nombre: "Miel o sirope de arce", cantidad: 15, unidad: "ml" },
      { nombre: "Calabaza", cantidad: 150, unidad: "g" },
      { nombre: "Cebolla roja", cantidad: 75, unidad: "g" },
      { nombre: "Calabacines", cantidad: 150, unidad: "g" },
      { nombre: "Microbrotes alfalfa", cantidad: 10, unidad: "g" },
    ],
    raciones: 1,
  },
  {
    id: 3,
    nombre: "Tortilla rellena de requesón y albahaca",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Huevos", cantidad: 3, unidad: "ud" },
      { nombre: "Agua", cantidad: 2, unidad: "cucharadas" },
      { nombre: "Aceite de oliva", cantidad: 5, unidad: "ml" },
      { nombre: "Albahaca fresca", cantidad: 5, unidad: "g" },
      { nombre: "Requesón o cottage", cantidad: 150, unidad: "g" },
      { nombre: "Tomates cherry", cantidad: 8, unidad: "ud" },
    ],
    raciones: 1,
  },
  {
    id: 4,
    nombre: "Ternera con Pasta",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Ternera molida", cantidad: 200, unidad: "g" },
      { nombre: "Pasta en crudo", cantidad: 30, unidad: "g" },
      { nombre: "Zanahoria", cantidad: 200, unidad: "g" },
      { nombre: "Cebolla", cantidad: 80, unidad: "g" },
      { nombre: "Tomate triturado", cantidad: 150, unidad: "g" },
      { nombre: "Aceite de oliva", cantidad: 5, unidad: "ml" },
    ],
    raciones: 1,
  },
  {
    id: 5,
    nombre: "Plato combinado flexible (Pollo)",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 250, unidad: "g" },
      { nombre: "Salteado de verduras", cantidad: 250, unidad: "g" },
      { nombre: "Arroz precocido", cantidad: 30, unidad: "g" },
    ],
    raciones: 1,
  },
  {
    id: 6,
    nombre: "Tabulé de Garbanzos y Quinoa",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Atún al natural", cantidad: 120, unidad: "g" },
      { nombre: "Garbanzos cocidos", cantidad: 150, unidad: "g" },
      { nombre: "Quinoa cocida", cantidad: 50, unidad: "g" },
      { nombre: "Lino molido", cantidad: 10, unidad: "g" },
      { nombre: "Espinacas o pepino", cantidad: 150, unidad: "g" },
      { nombre: "Zumo de limón", cantidad: 15, unidad: "ml" },
      { nombre: "Perejil", cantidad: 5, unidad: "g" },
    ],
    raciones: 1,
  },
  {
    id: 7,
    nombre: "Huevos Rotos con Pimientos (con patata)",
    tipo: "Cena",
    ingredientes: [
      { nombre: "Huevos", cantidad: 2, unidad: "ud" },
      { nombre: "Jamón", cantidad: 50, unidad: "g" },
      { nombre: "Pimientos", cantidad: 250, unidad: "g" },
      { nombre: "Patata", cantidad: 200, unidad: "g" },
      { nombre: "Aceite de oliva", cantidad: 5, unidad: "ml" },
    ],
    raciones: 1,
  },
  {
    id: 8,
    nombre: "Ensalada Titanic (Queso Fresco)",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Lechuga iceberg", cantidad: 100, unidad: "g" },
      { nombre: "Pepino", cantidad: 50, unidad: "g" },
      { nombre: "Tomate", cantidad: 50, unidad: "g" },
      { nombre: "Queso fresco", cantidad: 50, unidad: "g" },
      { nombre: "Nueces", cantidad: 10, unidad: "g" },
      { nombre: "Cebolla morada", cantidad: 20, unidad: "g" },
      { nombre: "Aceite de oliva", cantidad: 10, unidad: "ml" },
      { nombre: "Vinagre de manzana", cantidad: 5, unidad: "ml" },
    ],
    raciones: 1,
  },
  {
    id: 9,
    nombre: "Salmón con Quinoa y Leche de Coco",
    tipo: "Cena",
    ingredientes: [
      { nombre: "Lomo de salmón", cantidad: 170, unidad: "g" },
      { nombre: "Quinoa integral", cantidad: 125, unidad: "g" },
      { nombre: "Leche de coco", cantidad: 65, unidad: "ml" },
      { nombre: "Salsa de soja", cantidad: 5, unidad: "ml" },
      { nombre: "Aceite de oliva", cantidad: 5, unidad: "ml" },
      { nombre: "Zumo de lima", cantidad: 10, unidad: "ml" },
      { nombre: "Cúrcuma", cantidad: 1, unidad: "pizca" },
      { nombre: "Mix de semillas", cantidad: 5, unidad: "g" },
    ],
    raciones: 1,
  },
  {
    id: 10,
    nombre: "Poke Rico de Gambas",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Edamame", cantidad: 120, unidad: "g" },
      { nombre: "Gambas", cantidad: 120, unidad: "g" },
      { nombre: "Quinoa cocida", cantidad: 100, unidad: "g" },
      { nombre: "Aguacate", cantidad: 40, unidad: "g" },
      { nombre: "Pepino", cantidad: 50, unidad: "g" },
      { nombre: "Tomates cherry", cantidad: 50, unidad: "g" },
      { nombre: "Brotes verdes", cantidad: 50, unidad: "g" },
      { nombre: "Aceite de oliva", cantidad: 5, unidad: "ml" },
      { nombre: "Fruta de temporada", cantidad: 150, unidad: "g" },
    ],
    raciones: 1,
  },
  {
    id: 11,
    nombre: "Bowl de Pollo",
    tipo: "Comida",
    ingredientes: [
      { nombre: "Arroz basmati cocido", cantidad: 150, unidad: "g" },
      { nombre: "Maíz dulce", cantidad: 80, unidad: "g" },
      { nombre: "Pechuga de pollo", cantidad: 160, unidad: "g" },
      { nombre: "Aguacate", cantidad: 50, unidad: "g" },
      { nombre: "Tomate natural", cantidad: 80, unidad: "g" },
      { nombre: "Perejil fresco", cantidad: 5, unidad: "g" },
    ],
    raciones: 1,
  },
];

// Días de la semana
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function App() {
  const [recetas, setRecetas] = useState(recetasIniciales);
  const [planSemanal, setPlanSemanal] = useState({}); // { dia: { tipo: { receta, raciones } } }
  const [listaCompra, setListaCompra] = useState([]);

  // Añadir receta al plan semanal para un tipo de comida específico
  const añadirAlPlan = (dia, tipo, receta, raciones) => {
    setPlanSemanal((prev) => ({
      ...prev,
      [dia]: {
        ...prev[dia],
        [tipo]: { receta, raciones },
      },
    }));
  };

  // Generar lista de la compra
  const generarListaCompra = () => {
    const ingredientesAgrupados = {};

    Object.values(planSemanal).forEach((planDia) => {
      Object.values(planDia).forEach((planTipo) => {
        const { receta, raciones } = planTipo;
        const factor = raciones / receta.raciones;

        receta.ingredientes.forEach((ingrediente) => {
          const clave = ingrediente.nombre;
          const cantidad = ingrediente.cantidad * factor;
          const unidad = ingrediente.unidad;

          if (ingredientesAgrupados[clave]) {
            ingredientesAgrupados[clave] = {
              ...ingredientesAgrupados[clave],
              cantidad: ingredientesAgrupados[clave].cantidad + cantidad,
            };
          } else {
            ingredientesAgrupados[clave] = { nombre: clave, cantidad, unidad, comprado: false };
          }
        });
      });
    });

    setListaCompra(Object.values(ingredientesAgrupados));
  };

  // Marcar/desmarcar ingrediente como comprado
  const toggleComprado = (nombre) => {
    setListaCompra((prev) =>
      prev.map((item) =>
        item.nombre === nombre ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  // Filtrar recetas por tipo
  const recetasPorTipo = (tipo) => recetas.filter((receta) => receta.tipo === tipo);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Planificador de Recetas</h1>

      {/* Sección de recetas */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Recetas Disponibles</h2>
        {tiposComida.map((tipo) => (
          <div key={tipo} className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-blue-600">{tipo}</h3>
            <div className="grid grid-cols-1 gap-4">
              {recetasPorTipo(tipo).map((receta) => (
                <div key={receta.id} className="border p-4 rounded-lg bg-gray-50">
                  <h4 className="text-lg font-medium">{receta.nombre}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {receta.raciones} raciones | {receta.ingredientes.length} ingredientes
                  </p>
                  <div className="text-sm">
                    <p className="font-medium">Ingredientes:</p>
                    <ul className="list-disc pl-5">
                      {receta.ingredientes.map((ing, i) => (
                        <li key={i}>
                          {ing.cantidad} {ing.unidad} {ing.nombre}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Planificador semanal */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Planificador Semanal</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-2 border text-sm">Día / Tipo</th>
                {tiposComida.map((tipo) => (
                  <th key={tipo} className="py-2 px-2 border text-sm">{tipo}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diasSemana.map((dia) => (
                <tr key={dia}>
                  <td className="py-2 px-2 border font-medium text-sm">{dia}</td>
                  {tiposComida.map((tipo) => (
                    <td key={`${dia}-${tipo}`} className="py-2 px-2 border">
                      <select
                        className="w-full p-1 border rounded text-xs mb-1"
                        onChange={(e) => {
                          const recetaId = parseInt(e.target.value);
                          if (recetaId) {
                            const receta = recetas.find((r) => r.id === recetaId);
                            añadirAlPlan(dia, tipo, receta, receta.raciones);
                          }
                        }}
                      >
                        <option value="">--</option>
                        {recetasPorTipo(tipo).map((receta) => (
                          <option key={receta.id} value={receta.id}>
                            {receta.nombre}
                          </option>
                        ))}
                      </select>
                      {planSemanal[dia]?.[tipo] && (
                        <div className="text-xs">
                          <p className="font-medium">
                            {planSemanal[dia][tipo].receta.nombre}
                          </p>
                          <input
                            type="number"
                            min="1"
                            value={planSemanal[dia][tipo].raciones}
                            onChange={(e) =>
                              setPlanSemanal((prev) => ({
                                ...prev,
                                [dia]: {
                                  ...prev[dia],
                                  [tipo]: { ...prev[dia][tipo], raciones: parseInt(e.target.value) },
                                },
                              }))
                            }
                            className="w-full p-1 border rounded mt-1"
                          />
                          <p className="text-xs text-gray-500">raciones</p>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={generarListaCompra}
          className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-sm"
        >
          Generar Lista de la Compra
        </button>
      </div>

      {/* Lista de la compra */}
      {listaCompra.length > 0 && (
        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Lista de la Compra</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-2 border text-sm">Ingrediente</th>
                  <th className="py-2 px-2 border text-sm">Cantidad</th>
                  <th className="py-2 px-2 border text-sm">Comprado</th>
                </tr>
              </thead>
              <tbody>
                {listaCompra.map((item, index) => (
                  <tr key={index} className={item.comprado ? "bg-green-50" : ""}>
                    <td className="py-2 px-2 border text-sm">{item.nombre}</td>
                    <td className="py-2 px-2 border text-sm">
                      {item.cantidad.toFixed(2)} {item.unidad}
                    </td>
                    <td className="py-2 px-2 border text-center">
                      <input
                        type="checkbox"
                        checked={item.comprado}
                        onChange={() => toggleComprado(item.nombre)}
                        className="h-4 w-4"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}