interface RepositoryProps {
   repository: {
      name: string,
      description: string,
      link: string
   }
}


export function RepositoryItem({repository}: RepositoryProps){
   return (
      <li>
         <strong>{ repository.name ?? 'default'}</strong>
         <p>{repository.description}</p>

         <a href={repository.link}>
            Acessar repositório
         </a>
      </li>
   )
}