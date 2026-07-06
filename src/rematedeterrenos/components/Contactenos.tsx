import { useForm, Controller } from "react-hook-form";
import { useProyectos } from "../hooks/useProyectos";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { metaEvents } from "@/lib/metaPixel";

interface ContactForm {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  proyecto: string;
  mensaje: string;
}

export const Contactenos = () => {
  const { register, 
          handleSubmit, 
          control,
          reset, 
          formState: { errors } 
        } = useForm<ContactForm>();
  const { proyectos, loading: loadingProyectos } = useProyectos();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError]     = useState(false);

  const proyectosActivos = proyectos.filter((proyecto) => proyecto.isActive);

 const onSubmit = async (data: ContactForm) => {
    setIsSuccess(false);
    setIsError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        metaEvents.lead()
        
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  const inputClass = (hasError: boolean) =>
    `border rounded-lg px-4 py-2.5 text-[14px] text-stone-700 placeholder:text-stone-400 focus:outline-none transition-colors ${
      hasError ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-[#aedb4c]"
    }`;

  return (
    <section
      id="contactanos"
      className="relative py-15 px-6 max-sm:py-10 max-sm:px-1 bg-[#f5f5f5]"
    >
      <div className="max-w-6xl mx-auto bg-cover bg-center bg-no-repeat rounded-3xl p-10 max-sm:p-3 md:p-16"
        style={{ backgroundImage: "url('/fondoContactenos.webp')" }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Columna izquierda — texto */}
          <div>
            <h2 className="max-sm:text-2xl max-sm:px-3 max-sm:py-1 max-sm:text-center text-4xl md:text-5xl leading-tight mb-6">
              <span className="block font-black text-[#214b4be3]" style={{ fontFamily: "'Playfair Display', serif" }}>
                ¿Quieres Saber más?
              </span>
              <span className="block text-[#aedb4c]" style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem" }}>
                Contáctanos
              </span>
            </h2>
            <p className="text-stone-600 max-sm:text-[13px] max-sm:px-3 text-[15px] leading-relaxed max-w-sm">
              Queremos ayudarte a hacer realidad tu proyecto.{" "}
              <strong className="text-stone-800">
                Escríbenos y descubre todo lo que este terreno tiene para
                ofrecerte, sin compromiso y con atención personalizada.
              </strong>
            </p>
          </div>

          {/* Columna derecha — formulario */}
          <div className="bg-white/95 rounded-2xl p-5 md:p-8 shadow-[0_25px_75px_rgba(0,0,0,0.14)] border border-[#aedb4c]/40">
              <h3 className="font-bold text-stone-600 text-xl mb-6">
                Escríbenos{" "}
                <span className="text-[#aedb4c]">tu mensaje</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <input
                  {...register("nombre", { required: true })}
                  placeholder="Nombre"
                  className={inputClass(!!errors.nombre)}
                />
                {errors.nombre && <span className="text-red-400 text-[11px]">Requerido</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("apellido", { required: true })}
                  placeholder="Apellido"
                  className={inputClass(!!errors.apellido)}
                />
                {errors.apellido && <span className="text-red-400 text-[11px]">Requerido</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email inválido",
                    },
                  })}
                  placeholder="Email"
                  type="email"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <span className="text-red-400 text-[11px]">
                    {errors.email.message || "Requerido"}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("telefono", {
                    required: "Requerido",
                    minLength: {
                      value: 8,
                      message: "Mínimo 8 caracteres",
                    },
                  })}
                      type="tel"
                      placeholder="+56 9 ..."
                  className={inputClass(!!errors.telefono)}
                />
                {errors.telefono && <span className="text-red-400 text-[11px]">{errors.telefono.message || "Requerido"}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <Controller
                name="proyecto"
                control={control}
                rules={{ required: "Selecciona un proyecto" }}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={loadingProyectos}
                  >
                    <SelectTrigger
                      className={`w-full !h-auto ${inputClass(!!errors.proyecto)}`}
                    >
                      <SelectValue
                        placeholder={
                          loadingProyectos
                            ? "Cargando proyectos..."
                            : "Selecciona un proyecto"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {proyectosActivos.map((proyecto) => (
                        <SelectItem key={proyecto.id} value={proyecto.name}>
                          {proyecto.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.proyecto && (
                <span className="text-red-400 text-[11px]">{errors.proyecto.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <textarea
                {...register("mensaje", { required: true })}
                placeholder="Mensaje"
                rows={5}
                className={`w-full resize-none ${inputClass(!!errors.mensaje)}`}
              />
              {errors.mensaje && <span className="text-red-400 text-[11px]">Requerido</span>}
            </div>

            {/* Feedback */}
                {isSuccess && (
                  <p className="text-green-600 font-manrope text-[13px] text-center">
                    ✓ Mensaje enviado. ¡Pronto nos pondremos en contacto!
                  </p>
                )}
                {isError && (
                  <p className="text-red-400 font-manrope text-[13px] text-center">
                    Ocurrió un error al enviar. Inténtalo de nuevo.
                  </p>
                )}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit(onSubmit)}
                className="rounded-full border border-[#aedb4c] bg-[#aedb4c] px-6 py-2 text-[18px] font-bold text-stone-900 transition-colors duration-200 hover:bg-[#c7f56b] hover:text-stone-900"
              >
                Enviar
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};