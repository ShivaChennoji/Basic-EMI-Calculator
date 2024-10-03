const p_amt = document.querySelector("#p-amount");
const tn = document.querySelector("#tenure");
const irate = document.querySelector("#intrest-rate");
const pr_fees = document.querySelector("#Processing-fee");
const loanEMI = document.querySelector(".msg-1 h3");
const totalEMIvalue = document.querySelector(".msg-2 h3");
const totalintrestvalue = document.querySelector(".msg-3 h3");

const calculateEMI = () => {
        const pr = parseFloat(p_amt.value);
        const tnr = parseFloat(tn.value); 
        const ir = parseFloat(irate.value) / 12 / 100; 
        // monthly interest rate
        const fees = pr_fees.value ? parseFloat(pr_fees.value) : 0; 
        // check for optional processing fee
        if (isNaN(pr) || isNaN(tnr) || isNaN(ir)) {
            res.textContent = "Please enter valid numbers for all required fields!";
            return;
        }
            let calcEMI = (pr + fees) * ir * (Math.pow(1 + ir, tnr)) / (Math.pow(1 + ir, tnr) - 1);
            const result = calcEMI.toFixed(3);
             // limiting to two decimal places    
            loanEMI.innerHTML =`LoanEMI : ${Math.round(result)}`;
            let totalEMI = Math.round(calcEMI * tnr);
            totalEMIvalue.innerHTML = `Total Amount : ${totalEMI}`;
            let total_intrest =Math.round( totalEMI-pr)
            totalintrestvalue.innerHTML = `Total intrest : ${ total_intrest}`;

        };
        const clearFields = () => {
            p_amt.value = '';
            tn.value = '';
            irate.value = '';
            pr_fees.value = '';
            res.textContent = 'Your EMI will appear here';
            loanEMI.innerHTML ="0";
            totalEMIvalue.innerHTML="0";
            totalintrestvalue.innerHTML="0";

        };
        document.querySelector(".calculate-button").addEventListener("click", calculateEMI);
        document.querySelector(".clear-button").addEventListener("click", clearFields);