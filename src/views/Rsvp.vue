<script setup lang="ts">
  import { reactive } from "vue";
  import PageBreak from "../components/PageBreak.vue";
  import Construction from "../components/Construction.vue";
  import { vMaska } from "maska/vue";

  interface FormData {
    name: string;
    phone_number: string;
    attending: boolean;
    qtd_companions: number;
    companions: [];
    children: [];
    number_of_children?: number;
    number_of_adults?: number;
    adult_names?: string[];
    children_names?: boolean[];
  }

  const formData = reactive<FormData>({
    name: "",
    phone_number: "",
    attending: true,
    qtd_companions: 0,
    companions: [],
    children: [],
  });

  const handleSubmit = async () => {
    formData.number_of_adults =
      formData.companions.length -
      formData.children.filter(child => child).length;

    formData.number_of_children = formData.children.filter(
      child => child,
    ).length;

    formData.adult_names = formData.companions.filter(
      (_, index) => !formData.children[index],
    );

    formData.children_names = formData.companions.filter(
      (_, index) => !!formData.children[index],
    );

    const response = await fetch(import.meta.env.VITE_API_URL + "/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch(error => console.error(error));

    console.info(await response);
  };
</script>

<template>
  <page-break />
  <h2
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 border-red-100"
  >
    Confirmar Presença
  </h2>

  <p class="text-justify text-blue-300 my-14">
    Sua presença é muito importante para nós. Por favor, confirme sua presença o
    quanto antes. Preencha o formulário abaixo com o nome dos convidados e
    selecione a opção de confirmação.
  </p>

  <!-- <section class="w-full">
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 gap-2">
        <div class="flex flex-col">
          <label for="name" class="text-blue-300">
            Nome do Convidado <span class="text-red-200">*</span>
          </label>
          <input
            type="text"
            required
            v-model="formData.name"
            class="border-2 border-blue-300 outline-red-300 rounded-full p-2"
            placeholder="Nome do Convidado"
          />
        </div>
        <div class="flex flex-col">
          <label for="phone_number" class="text-blue-300">
            Telefone <span class="text-red-200">*</span>
          </label>
          <input
            type="text"
            required
            id="phone_number"
            v-maska="'(##) #####-####'"
            v-model="formData.phone_number"
            class="border-2 border-blue-300 outline-red-300 rounded-full p-2"
            placeholder="(99) 99999-9999"
          />
        </div>
        <div class="flex flex-col">
          <label for="attending" class="text-blue-300">
            Confirmação <span class="text-red-200">*</span>
          </label>
          <select
            id="attending"
            required
            v-model="formData.attending"
            class="border-2 border-blue-300 outline-red-300 rounded-full p-[0.563rem]"
          >
            <option :value="true">Confirmado</option>
            <option :value="false">Não confirmado</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-blue-300">
            Qtd. acompanhantes <span class="text-red-200">*</span>
          </label>
          <input
            type="number"
            v-maska="'##'"
            id="companions"
            max="99"
            v-model="formData.qtd_companions"
            name="companions"
            class="border-2 border-blue-300 outline-red-300 rounded-full p-2"
          />
        </div>
        <template v-for="i in formData.qtd_companions" :key="i">
          <div class="flex flex-row">
            <div class="flex flex-col flex-grow">
              <label :for="'companion' + 1" class="text-blue-300">
                Nome do Acompanhante {{ i }} <span class="text-red-200">*</span>
              </label>
              <input
                type="text"
                :id="'companion' + i"
                required
                v-model="formData.companions[i - 1]"
                class="border-2 border-blue-300 outline-red-300 rounded-full p-2"
                placeholder="Nome do Acompanhante"
              />
            </div>
            <div class="flex flex-col">
              <label :for="'children' + i" class="text-blue-300">
                Criança ?
              </label>
              <input
                type="checkbox"
                :id="'children' + i"
                :value="true"
                class="accent-blue-300 outline-red-300 h-6 w-6 m-2.5 self-center border"
                v-model="formData.children[i - 1]"
              />
            </div>
          </div>
        </template>
        <div class="flex flex-col mt-12">
          <button
            type="submit"
            class="py-1.5 px-6 uppercase text-lg tracking-wider outline-red-300 border-green-200 bg-green-200 border-2 text-white hover:bg-green-100 hover:bg-opacity-50 hover:text-blue-300 rounded-full transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  </section>
  <section
    class="w-full mt-10 bg-stone-100 border border-red-300 rounded-lg p-2 whitespace-pre-wrap"
  >
    {{ formData }}
  </section> -->
  <construction />
</template>
