const GenderCheckBox = () => {
    return (
        <div className="flex items-center space-x-3 mt-3 mb-1">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox;




//STARTUP CODE FOR GenderCheckBox


// const GenderCheckBox = () => {
//     return (
//         <div className="flex items-center space-x-3 mt-3 mb-1">
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className="label gap-2 cursor-pointer">
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default GenderCheckBox;
