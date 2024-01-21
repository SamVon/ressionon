'use client'
//ເອີ້ນໃຊ້ຝັ່ງຊັ້ນ login from action
import { login } from './action'
//ຜູກ State ກັບ Next ໂດຍໃຊ້ useFormState
import { useFormState } from 'react-dom'


export default function Page(){

    const initialState = {
        message: null,
    }

    // ເປັນການຮັບໂຕແປ່ມາ ໃນ (ຕົວແປ່ ກັບ ອິນວິດຊົວສະເຕດ) ຫຼັງຈາກສ້າງແລ້ວເຮົາ ມາເຟສສະເຕດຄືນອິກ
    const [state, formAction] = useFormState(login, initialState)    

    return(
        <form action={formAction}> 
            <div>
                Email <input type="text" name="email" />
            </div>
            <div>
                Password <input type="password" name="password" />
            </div>
            <div>
            {/* ສ່ວນນີ້ຈະເປັນການເຊັກການລ໋ອກອິນເຂົ້າມາວ່າເມວ ແລະ ພາສເວີດຖືກບໍ */}
            Message:{state.message}
            </div>
        <button>Login</button>
        </form>
    )
}