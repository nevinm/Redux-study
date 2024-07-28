import { Folder } from "./Folder";


export const FileTree = ({ data }) => {

    return (
        <>
            <h3>File Tree</h3>
            {data.map((item, index) => <Folder key={`folder-${index}`} item={item} />)}
        </>
    )
}