//Axios
import axios from "axios";
//Vue
import { ref, computed } from "vue";

export default function useClima() {
  const clima = ref({});
  const cargando = ref(false);
  const error = ref('');

  const obtenerClima = async ({ ciudad, pais }) => {
    //Importar el Api Key
    const key = import.meta.env.VITE_API_KEY;
    cargando.value = true;
    clima.value = {};
    error.value = '';
    try {
      //Obtener lat y lon
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      //Obtener el clima
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: resultado } = await axios(urlClima);
      clima.value = resultado;
    } catch (error) {
      error.value = 'Ciudad no encontrada';
    }finally{
      cargando.value = false;
    }
  };

  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0;
  });

  const formatearTemperatura = (temperatura) => parseInt(temperatura - 273.15);

  return {
    obtenerClima,
    formatearTemperatura,
    mostrarClima,
    clima,
    cargando
  };
}
