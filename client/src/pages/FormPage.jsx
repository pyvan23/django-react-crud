import { useForm } from "react-hook-form";
import { createTasksApi, deleteTasksApi, editTasksApi, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {  toast } from "react-hot-toast";


export function FormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();
  //console.log(params.id);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
     
      await editTasksApi(params.id,data)
      toast.success('Has editado correctamente la tarea')
    } else {
      await createTasksApi(data);
      toast.success('Has creado correctamente la tarea')
    }

    navigate("/tasks");
  });

  useEffect(()=>{
     async function loadTask(){

      if(params.id){
        console.log('obteniendo datos');
        const res = await getTask(params.id)
        setValue('title',res.data.title)
        setValue('description',res.data.description)
        console.log(res);
    }
  }
  loadTask()
  },[])


  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Titulo: Este campo es requerido</span>}
        <textarea
         className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        >
          {errors.description && (
            <span>Descripcion: Este campo es requerido</span>
          )}
        </textarea>
        <button className="bg-indigo-500 rounded-lg p-3 block mt-3">Save</button>
      </form>

      {params.id && (
        <button className="bg-red-600 rounded-lg p-3 block mt-3"
          onClick={async () => {
            const acept = window.confirm(
              "Esta seguro que desea eliminar la tarea?"
            );
            if (acept) {
              await deleteTasksApi(params.id);
              toast.success('Has eliminado correctamente la tarea')
              navigate("/tasks");
            } else {
              navigate("/tasks");
            }
          }}
        >
          {" "}
          Delete
        </button>
      )}
    </div>
  );
}
