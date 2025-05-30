export function Input({  placeholder , refrence }: { placeholder:string; refrence?:any }) {
    return <div>
        <input refrence= {refrence} placeholder={placeholder} type={"text"} className="px-4 py-2 rounded m-2"  />
    </div>
}