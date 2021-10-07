import { RepositoryItem } from "./RepositoryItem";

const repository = {
   name: 'unform',
   description: 'forms in react',
   link: 'https://github.com/RenanTavaress?tab=repositories'
}

export function RepositoryList(){
   return (
      <section>

         <h1>Lista de Repositorios</h1>

         <ul> 
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
         </ul>

      </section>
   )
}