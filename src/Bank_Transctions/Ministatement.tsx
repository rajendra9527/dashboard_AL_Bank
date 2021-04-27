import React from "react"

export interface MinistatementProps {
  
}

type mini_statement = {
    AccountNo: number;
}

const Ministatement: React.FC<MinistatementProps> = (Props) => {
    const { Account, setAccount } = React.useContext(AppContext)
    const { handleSubmit, watch, formState } = useForm<SubmitData>();
    const onLoginSubmit = (formValues: any) => {
        setIsLoginInProgress(true)
        httpClient.get("GetMiniStatement", formValues)
        .then(response => response.data)
    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="AccountNo">Account No</label>
                <input onChange={onFieldChange} type="text" value={form.AccountNo} className="form-control" id="CustomerId" name="CustomerId" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        )
}

 export default Ministatement