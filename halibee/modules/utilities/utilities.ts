import { formatRelative } from "date-fns"
import Swal from "sweetalert2"

export const parseDate = (date) => {
    return formatRelative(
        new Date(date),
        new Date()
    )
}

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

