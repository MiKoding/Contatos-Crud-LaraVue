<template>
<div>

  <div class="container mt-3">
    <div class="row">
        <div class="col md-1">
            <form @submit.prevent="save" enctype="multipart/form-data">
                <div class="mb-2">
                    <input type="text" v-model="contato.Foto" class="form-control" placeholder="Foto">
                </div>
                
                <div class="mb-2">
                    <input type="text" v-model="contato.Nome" class="form-control" placeholder="Nome">
                </div>

                <div class="mb-2">
                    <input type="text" v-model="contato.Numero" class="form-control" placeholder="Número">
                </div>
                
                <div class="mb-2">
                    <input type="text" v-model="contato.Email" class="form-control" placeholder="Email">
                </div>
                <div class="mb-2">
                    <input type="submit" class="btn btn-success" value="Cadastrar ou Alterar">
                </div>
            </form>
        </div>
        <div class="col-md-4">
            <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
        </div>
    </div>
  </div>
   <!-- card de contato -->
   <div class="container mt-3">
    <div class="row">
        <div class="col-md-6">
            <div v-for="contato in result" v-bind:key="contato.id">
            <div class="card my-2 list-group-item-success shadow">
                <div class="car-body">
                    <div class="row align-items-center">
                        <div class="col-sm-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img" style="margin-left: 10px;">
                        </div>
                        <div class="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item">Nome : <span class="fw-bold">{{ contato.Nome }}</span></li>
                                <li class="list-group-item">Email : <span class="fw-bold">{{contato.Email}}</span></li>
                                <li class="list-group-item">Contato : <span class="fw-bold"> {{contato.Numero}} </span></li>
                            </ul>

                        </div>
                        <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">

                            <button type="button" @click="edit(contato)" class="btn btn-primary my-1">
                                <i class="fa fa-pen"></i>Editar
                            </button>
                            <button type="button" class="btn btn-danger my-1" @click="remove(contato)">
                                <i class="fa fa-trash"></i>Excluir
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
</div>
</template>
  
  <script>
  import  Vue from 'vue';
  import axios from 'axios';
  Vue.use(axios);
  export default {
    name: 'ContactView',
    data () {
      return {
        result: {},
        contato:{
            id: '',
            Nome: '',
            Email: '',
            Foto: '',
            Numero: ''
        }
      }
    },
    created(){
        this.ContactLoad();
    },
    methods: {
        ContactLoad(){
            var page = "http://127.0.0.1:8000/api/contatos";
            axios.get(page).then(
                ({data})=>{
                    console.log(data);
                    this.result = data;
                }
            );
        },
        save(){
            if(this.contato.id == ''){
                this.contato.Foto = "faketeste";
                this.saveData();
            }else{
                this.updateData();
            }
        
        }, 
        saveData(){
        axios.post("http://127.0.0.1:8000/api/save", this.contato).then(
            ({data})=>{
                alert("saved");
            }
        )
         },
        edit(contato){
            this.contato = contato;
        },
        updateData(){
            var editUrl = "http://127.0.0.1:8000/api/update/"+ this.contato.id;
            axios.put(editUrl,this.contato).then(({data})=>{
                this.contato.Nome = '',
                this.contato.Email = '',
                this.contato.Numero ='',
                this.contato.Foto = '',
                this.Id = '',
                alert("Contato Atualizado");
                this.ContactLoad();
            })
        },

        remove(contato){
            var deleteRecords = "http://127.0.0.1:8000/api/delete/"+ contato.id;
            axios.delete(deleteRecords);
            alert('contato deletado');
            this.ContactLoad();
        }


    }
  }
  </script>
  
  