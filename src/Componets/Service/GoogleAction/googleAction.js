// import axios from "axios";
import axios from "axios";
import generateUniqueId from "generate-unique-id";
// import { ref } from "firebase/database";
import { storage } from "../../../fireBase.js";
import { getDownloadURL, uploadBytes, ref} from "firebase/storage";


export const GetData = (data) => {
    return {
        type: 'GETDATA',
        payload: data
    };
}

export const EditBooks = (editdata) => {
    return {
        type: 'EDITBOOKS',
        payload: editdata
    };
}

const updateData = () =>{
    return {
        type: 'UPDATEBOOKS',
    }
}

export const DeleteBook = (deletedId) => {
    return {
        type: 'DELETEBOOK',
        payload: deletedId
    };
}

export const AddBookAsync = (data) => {
    return (dispatch) => {
         data.id = generateUniqueId({
            length: 3,
            useLetters: false
        });
        axios.post('http://localhost:3300/google', data)
            .then((res) => {
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.log("error", err);
            });
    };
};

export const GetDataAsync = () => {
    return (dispatch) => {
        axios.get('http://localhost:3300/google')
            .then((res) => {
                console.log("get data success", res);
                dispatch(GetData(res.data));
            })
            .catch((err) => {
                console.log("error", err);
            });
    };
};

export const EditDataAsync = (editId) => {
    return (dispatch) => {
        axios.get(`http://localhost:3300/google/${editId}`)
            .then((res) => {
                console.log("Edit data success:", res.data);
                dispatch(EditBooks(res.data));

            })
            .catch((err) => {
                console.error("Error editing data:", err);
            });
    };
};

export const updateDataAsync = (updatedata) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3300/google/${updatedata.id}`, updatedata)
            .then((res) => {
                console.log("Update data success:", res);
                dispatch(GetDataAsync());
                dispatch(updateData())
            })
            .catch((err) => {
                console.error("Error updating data:", err);
                // dispatch(updateErr(err));
            });
    };
};

export const DeleteAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3300/google/${id}`).then((res) => {
            console.log("res", res.data);
            dispatch(GetDataAsync(res.data))
        }).catch((err) => {
            console.log("err", err);
        })
    }
}

export const uploadImg = (file) => {
    console.log("OLK>>>")
    return (dispatch) => {

        console.log("fhff",file);
        const storageRef = ref(storage, `img/${file.name}`);
        console.log("STR",storageRef);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url; 
            })
            .catch(err => {
                console.error("Error uploading file pokemon: ", err);
                throw err;
            });
    };

};

export const updateImg = (file) => {
    console.log("OLK>>>")
    return (dispatch) => {

        console.log("fhff",file);
        const storageRef = ref(storage, `img/${file.name}`);
        console.log("STR",storageRef);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url; 
            })
            .catch(err => {
                console.error("Error uploading file pokemon: ", err);
                throw err;
            });
    };

};
