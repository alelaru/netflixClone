import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";


const useContent = ( target ) => {

    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)

        useEffect(() => {
            
            firebase
                .firestore()
                .collection(target)
                .get()
                .then(snapshot => {
                    const allContent = snapshot.docs.map((contentObj) => ({
                        ...contentObj.data(),
                        docId: contentObj.id
                    }))
                    setContent(allContent)
                })
                .catch(error => {
                    console.log(error.message);
                })
                console.log(content);
        }, [ ]);

        return { [target]: content}

}
 
export default useContent;