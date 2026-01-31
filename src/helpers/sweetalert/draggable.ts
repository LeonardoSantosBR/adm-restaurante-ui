import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import type { SweetAlertIcon } from "../../types/sweetalert/sweet-alert-icons";

function draggableAlert({ title, icon }: { title: string; icon: SweetAlertIcon }) {
  return Swal.fire({
    title: title,
    icon,
    draggable: true,
  });
}

export default draggableAlert;
