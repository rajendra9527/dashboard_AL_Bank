import { type } from "os"
import React from "react"

export interface DepositWithdrawProps {

}

type Deposit_withdraw {
    AccountNumber: number;
    TransactionType: number;
    Deposit: number;
    AccountBalance: number;
}


const DepositWithdraw: React.FC<DepositWithdrawProps> = (Props) => {
    const { Account, setAccount } = React.useContext(AppContext)
    const { handleSubmit, watch, formState } = useForm<SubmitData>();
    const onLoginSubmit = (formValues: any) => {
        setIsLoginInProgress(true)
        httpClient.post("DepositWithdrawal", formValues)
            .then(response => response.data)
    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="AccountNumber">Account Number</label>
                <input onChange={onFieldChange} type="text" value={form.AccountNumber} className="form-control" id="CustomerId" name="CustomerId" />
            </div>

            <div className="form-group">
                <label htmlFor="TransactionType">TransactionType</label>
                <input onChange={onFieldChange} type="text" value={form.TransactionType} className="form-control" id="FirstName" name="FirstName" />
            </div>

            <div className="form-group">
                <label htmlFor="Deposit">Deposit</label>
                <input onChange={onFieldChange} type="text" value={form.Deposit} className="form-control" id="LastName" name="LastName" />
            </div>

            <div className="form-group">
                <label htmlFor="AccountBalance">Account Balance</label>
                <input onChange={onFieldChange} type="text" value={form.AccountBalance} className="form-control" id="Email" name="Email" />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default DepositWithdraw