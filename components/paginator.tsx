import ParseLink from "parse-link-header"

const Paginator = ({page, links, total}) => {
    if(total > 12){
        if(links.prev){
            return <div className="grid grid-cols-2 mt-2">
            <button onClick={() => page(links.prev.url)} className="justify-self-start">Prev</button>
            <button onClick={() => page(links.next.url)} className="justify-self-end">Next</button>
        </div>
        }
        if(!links.next){
            return <div className="grid grid-cols-2 mt-2">
              <button onClick={() => page(links.prev.url)} className="justify-self-start">Prev</button>
              </div>
        }
        return <div className="grid grid-cols-2 mt-2">
        <div></div>
        <button onClick={() => page(links.next.url)} className="justify-self-end">Next</button>
    </div>
        
    }
    return "";
}

export default Paginator;