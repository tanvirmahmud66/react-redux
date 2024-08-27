const API_URL = 'http://frappe-hrm.com:8007/api/resource'

export async function fetchEmployee(){
    const response = await fetch(`${API_URL}/Employee?fields=["*"]&limit_start=0&limit_page_length=1000`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'token 7cc76ddcc40a9c3:ddc2c05a983a3a6'
        }
    })

    if (!response.ok) throw new Error('Failed to fetch todos');

    const data = await response.json()
    return data.data
}

export async function addEmployee(){

}

export async function updateEmployee(){

}

export async function deleteEmployee(){

}