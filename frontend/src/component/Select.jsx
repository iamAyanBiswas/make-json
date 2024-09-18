// import React from "react";
// import { Select, SelectItem } from "@nextui-org/react";

// export default function InputSelect({ keys, onChange }) {
//     const [value, setValue] = React.useState("name");

//     const handleSelectionChange = (e) => {
//         setValue(e.target.value);
//     };

//     let datas = [
//         { key: "address", label: "Address" }, { key: "city", label: "City" }, { key: "country", label: "Country" }, { key: "email", label: "Email" }, { key: "mobile", label: "Mobile No" }, { key: "name", label: "Name" }, { key: "pin", label: "Pin Code" }
//     ]
//     return (
//         <div key={keys} className="flex max-w-xs flex-col gap-2 w-48">
//             <Select
//                 variant="bordered"
//                 placeholder="Select one"
//                 selectedKeys={[value]}
//                 className="max-w-xs"
//                 onChange={()=>{handleSelectionChange;onChange} }
//             >
//                 {datas.map((data) => (
//                     <SelectItem key={data.key}>
//                         {data.label}
//                     </SelectItem>
//                 ))}
//             </Select>
//         </div>
//     );
// }


















import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function InputSelect({name,onChange}) {


    let datas = [
        { key: "address", label: "Address" }, { key: "city", label: "City" }, { key: "country", label: "Country" }, { key: "email", label: "Email" }, { key: "mobile", label: "Mobile No" }, { key: "myname", label: "Name" }, { key: "pin", label: "Pin Code" }
    ]
    return (
        <div className="flex w-60 flex-wrap md:flex-nowrap gap-4">
            <Select label="Select One" className="max-w-xs" name={name} onChange={onChange}>
                {datas.map((data) => (
                    <SelectItem key={data.key}>
                        {data.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
