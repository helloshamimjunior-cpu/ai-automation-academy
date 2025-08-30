export default function PageHeader({title,sub}:{title:string,sub?:string}){
  return (<div className="py-10"><h1>{title}</h1>{sub && <p className="lead mt-2">{sub}</p>}</div>)
}
