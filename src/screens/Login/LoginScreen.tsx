import { useNavigate } from 'react-router'
import { ROUTES } from '../../routes'

export function Component() {
  const navigate = useNavigate()

  return (
    <div
          data-pencil-name="FITCORE — Iniciar sesión"
          className="box-border w-[390px] h-fit flex flex-col gap-0 justify-start items-start bg-[#2A2D34] overflow-hidden"
        >
          <div
            data-pencil-name="Presentación FITCORE"
            className="box-border w-full h-[260px] shrink-0 flex flex-col gap-[18px] p-[28px_20px_22px_20px] justify-center items-center [background-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#F2643022_0%,_#2A2D34_62%,_#2A2D34_100%)] bg-no-repeat bg-[length:100%_100%]"
          >
            <div
              data-pencil-name="Logo principal FITCORE"
              className="box-border w-fit h-fit shrink-0 flex flex-col gap-[12px] justify-start items-center"
            >
              <div
                data-pencil-name="Símbolo FITCORE"
                className="box-border w-[74px] h-[74px] shrink-0 [box-shadow:0px_0px_24px_#F2643044] flex flex-row gap-0 justify-center items-center bg-[#F26430] rounded-[24px]"
              >
                <svg
                  data-pencil-name="Mancuerna"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[38px] shrink-0 h-[38px]"
                >
                  <path
                    d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                    fill="#2A2D34"
                   />
                </svg>
              </div>
              <div
                data-pencil-name="FITCORE"
                className="text-[32px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[3px] text-left [white-space:nowrap]"
              >
                FITCORE
              </div>
            </div>
            <div
              data-pencil-name="Mensaje principal"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] justify-start items-center"
            >
              <div
                data-pencil-name="Tu progreso empieza acá"
                className="text-[18px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-center [white-space:nowrap]"
              >
                Tu progreso empieza acá.
              </div>
              <div
                data-pencil-name="Descripción FITCORE"
                className="text-[11px]/[14px] box-border w-[320px] text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-center"
              >
                Entrená, seguí tu evolución y gestioná tu gimnasio desde un solo lugar.
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Formulario de inicio de sesión"
            className="box-border w-full h-fit shrink-0 flex flex-col gap-[18px] p-[22px_20px_16px_20px] justify-start items-start"
          >
            <div
              data-pencil-name="Bienvenida"
              className="box-border w-fit h-fit shrink-0 flex flex-col gap-[6px] justify-start items-start"
            >
              <div
                data-pencil-name="Bienvenido de nuevo"
                className="text-[22px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Bienvenido de nuevo
              </div>
              <div
                data-pencil-name="Ayuda inicio de sesión"
                className="text-[12px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Iniciá sesión para continuar con tu entrenamiento.
              </div>
            </div>
            <div
              data-pencil-name="Campo Correo electrónico"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start"
            >
              <div
                data-pencil-name="Etiqueta Correo electrónico"
                className="text-[11px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Correo electrónico
              </div>
              <div
                data-pencil-name="Entrada Correo electrónico"
                className="box-border w-full h-[56px] shrink-0 flex flex-row gap-0 p-[0px_14px] justify-between items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
              >
                <div
                  data-pencil-name="Contenido Correo electrónico"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center"
                >
                  <svg
                    data-pencil-name="Icono Correo electrónico"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[19px] shrink-0 h-[19px]"
                  >
                    <path
                      d="M2.05762 1.77734q-0.28027 0.04102-0.53321 0.16748-0.34863 0.19824-0.58789 0.50586-0.23584 0.30762-0.32129 0.70069-0.01367 0.10938-0.02734 0.66992l0 3.17871 0 3.17871q0.01367 0.56055 0.02734 0.66992 0.11279 0.5332 0.50245 0.90577 0.39307 0.36914 0.92627 0.46826 0.16748 0.02734 4.95605 0.02734 4.78857 0 4.95605-0.02734 0.5332-0.09912 0.92286-0.46826 0.39307-0.37256 0.50586-0.90577 0.01367-0.10938 0.02734-0.66992l0-3.17871 0-3.17871q-0.01367-0.56055-0.02734-0.66992-0.12647-0.54688-0.53321-0.92285-0.40674-0.37939-0.95019-0.46485-0.1709-0.01367-4.93897-0.01367-4.76465 0-4.90478 0.02734z m9.81298 1.17579q0.09912 0.04443 0.18116 0.12304 0.08545 0.0752 0.12646 0.16065 0.04443 0.08203 0.05127 0.12988 0.00684 0.04785 0.00684 0.18799l0 0.21191-2.46436 1.58252q-2.46436 1.56543-2.53613 1.60303-0.06836 0.03418-0.16748 0.03418l-0.02734 0.01367q-0.0957 0.01367-0.2085-0.04102-0.15381-0.07178-0.65967-0.37939l-4.40918-2.81299 0-0.21191q0-0.14014 0.00684-0.18799 0.00684-0.04785 0.04101-0.12305 0.0376-0.07861 0.12647-0.16064 0.09229-0.08545 0.16748-0.1128 0.07861-0.03076 0.70752-0.04443l4.18701 0 4.18701 0q0.61523 0 0.68359 0.02735z m-5.63964 5.02783q0.22217 0.10938 0.46142 0.15381 0.09912 0.02734 0.30762 0.02734 0.2085 0 0.30762-0.02734 0.30762-0.05811 0.54687-0.19825 0.14014-0.08203 2.26612-1.42529l2.12939-1.36035-0.01367 5.50293-0.04102 0.09912q-0.11279 0.2085-0.3247 0.29395l-0.09571 0.02734-9.5498 0-0.09571-0.02734q-0.21191-0.08545-0.3247-0.29395l-0.04102-0.09912-0.01367-5.50293 2.17041 1.37402q2.17041 1.38428 2.31055 1.45606z"
                      fill="#A3A7AF"
                     />
                  </svg>
                  <div
                    data-pencil-name="Placeholder Correo electrónico"
                    className="text-[16px]/[normal] box-border text-[#777C86] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    tu@email.com
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Campo Contraseña"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start"
            >
              <div
                data-pencil-name="Etiqueta Contraseña"
                className="text-[11px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Contraseña
              </div>
              <div
                data-pencil-name="Entrada Contraseña"
                className="box-border w-full h-[56px] shrink-0 flex flex-row gap-0 p-[0px_14px] justify-between items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
              >
                <div
                  data-pencil-name="Contenido Contraseña"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center"
                >
                  <svg
                    data-pencil-name="Icono Contraseña"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[19px] shrink-0 h-[19px]"
                  >
                    <path
                      d="M6.77441 0.60156q-0.72803 0.02734-1.38769 0.3794-0.65625 0.34863-1.12451 0.92285-0.46826 0.57422-0.64942 1.28857l0 0.01367q-0.07178 0.29395-0.08545 0.48536-0.01367 0.18799-0.02734 1.02539l0 1.10742-0.2666 0q-0.40674 0-0.63916 0.04443-0.229 0.04102-0.45117 0.15039-0.32471 0.16748-0.56397 0.44776-0.23584 0.28027-0.34863 0.64599l-0.05469 0.15381 0 4.7168 0.05469 0.15381q0.15723 0.51953 0.56055 0.86132 0.40674 0.3418 0.93994 0.39991 0.14014 0.02734 4.26904 0.02734 4.12891 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-4.7168-0.05469-0.15381q-0.11279-0.36572-0.35205-0.64599-0.23584-0.28027-0.56055-0.44776-0.22217-0.10938-0.45459-0.15039-0.229-0.04443-0.63574-0.04443l-0.2666 0 0-1.13477q-0.01367-0.81006-0.02734-0.99804-0.01367-0.19141-0.08545-0.47168l0-0.02735q-0.18115-0.71436-0.66651-1.30224-0.48193-0.58789-1.15185-0.93653-0.82715-0.40674-1.79444-0.35205z m0.70069 1.20313q0.75537 0.15381 1.2749 0.7417 0.3623 0.40674 0.50244 0.92627 0.05811 0.19482 0.06494 0.41357 0.00684 0.21533 0.00684 0.9707l0 0.96729-4.64844 0 0-1.06299q0-0.82715 0.01367-1.0083 0.01367-0.18457 0.09912-0.40674 0.22217-0.64258 0.74854-1.06982 0.52637-0.42725 1.19629-0.5127 0.14014-0.01367 0.3623 0 0.22559 0.01367 0.3794 0.04102z m3.85205 5.25q0.08203 0.04443 0.15723 0.12304 0.07861 0.0752 0.11279 0.15381 0.0376 0.0752 0.0581 0.19483 0.02051 0.11621 0.00684 2.19092l0 1.6372q0 0.3623-0.02734 0.48877-0.01367 0.08545-0.07178 0.14014l-0.01367 0.02734q-0.11279 0.12646-0.26661 0.19824l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.01367-0.02734q-0.05811-0.06836-0.07178-0.14014-0.02734-0.12646-0.02734-0.48877l0-1.65088q-0.01367-2.08838 0.01367-2.20117 0.01367-0.18115 0.1333-0.31445 0.11963-0.1333 0.28711-0.17432 0.06836-0.01367 4.25537-0.01367l4.20069 0.01367 0.09912 0.04102z"
                      fill="#A3A7AF"
                     />
                  </svg>
                  <div
                    data-pencil-name="Placeholder Contraseña"
                    className="text-[16px]/[normal] box-border text-[#777C86] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Ingresá tu contraseña
                  </div>
                </div>
                <div
                  data-pencil-name="Mostrar contraseña"
                  className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center"
                >
                  <svg
                    data-pencil-name="Ojo cerrado"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[19px] shrink-0 h-[19px]"
                  >
                    <path
                      d="M1.07666 0.60156q-0.29395 0.02734-0.42725 0.30078-0.12988 0.27344 0.01026 0.54004 0.02734 0.06836 1.12451 1.16895 1.10059 1.09717 1.07324 1.11426l-0.19824 0.16748q-0.24951 0.19482-0.58789 0.54687-0.33496 0.34863-0.56738 0.65625-0.229 0.30762-0.46827 0.71436-0.23926 0.40674-0.3623 0.7417-0.15381 0.39307-0.05811 0.7417 0.09912 0.30762 0.35547 0.77929 0.25977 0.46826 0.54004 0.84424 0.22559 0.29395 0.56739 0.65283 0.34521 0.35547 0.63916 0.58106 1.104 0.89551 2.46093 1.2749 1.36035 0.37598 2.74463 0.18115 0.98096-0.14014 1.87647-0.54687l0.29394-0.12647 1.20313 1.18946q1.19287 1.18945 1.26123 1.23388 0.18115 0.08203 0.37939 0.05469 0.29395-0.05469 0.41699-0.32129 0.12646-0.2666 0.00342-0.5332-0.04443-0.05469-5.88232-5.90625-5.83789-5.85498-5.96436-5.93701-0.18115-0.15381-0.43408-0.1128z m5.62939 1.75q-0.43408 0.01367-0.59472 0.05811-0.16064 0.04102-0.25977 0.15381-0.2085 0.2085-0.16064 0.50244 0.04785 0.29395 0.34179 0.43408 0.08545 0.02734 0.18799 0.03418 0.10596 0.00684 0.43067-0.02051 0.7417-0.05469 1.52441 0.11279 1.30225 0.2666 2.36524 1.11426 1.06641 0.84424 1.62353 2.06446l0.08545 0.19482-0.06836 0.15381q-0.23926 0.51953-0.60498 1.03564-0.12305 0.18115-0.16748 0.28028-0.04102 0.09912-0.02734 0.22558 0.02734 0.33496 0.33496 0.48877 0.08545 0.04102 0.23925 0.04102 0.19482 0 0.32129-0.08887 0.12647-0.09229 0.33496-0.38623 0.2666-0.39307 0.49561-0.84082 0.23242-0.44775 0.28027-0.67676 0.05127-0.23242 0.01026-0.43408-0.04102-0.20508-0.22559-0.58105-0.33496-0.72803-0.875-1.37745-0.53662-0.65283-1.19629-1.14502-0.60156-0.44775-1.28857-0.75537-0.68359-0.30762-1.39795-0.46142-0.54687-0.11279-0.98096-0.12647l-0.34863-0.01367q-0.11279 0-0.3794 0.01367z m-2.35156 2.83008l0.62891 0.64258-0.06836 0.15381q-0.12646 0.23926-0.17774 0.45117-0.04785 0.2085-0.06152 0.50928-0.01367 0.30078 0.04102 0.56054 0.05811 0.25635 0.19824 0.52295 0.23584 0.51953 0.69043 0.84766 0.45801 0.32813 1.03223 0.44092 0.16748 0.02734 0.44433 0.01367 0.28027-0.01367 0.48877-0.06152 0.21191-0.05127 0.45117-0.17774l0.15381-0.06836 0.51953 0.50244q0.50244 0.51953 0.50244 0.52637 0 0.00684-0.16064 0.07178-0.16064 0.06152-0.32813 0.11621-0.72803 0.23926-1.55517 0.2666-1.37061 0.04102-2.61817-0.56055-1.24414-0.60156-2.08496-1.70898-0.29395-0.38965-0.54687-0.90918l-0.15381-0.32129 0.08545-0.19482q0.60156-1.28857 1.71924-2.14307 0.14014-0.11279 0.15381-0.11279 0.01709 0 0.64599 0.63232z m2.89844 2.9668q-0.07178 0.01367-0.2666 0.01367-0.19482 0-0.28028-0.02734-0.30762-0.08545-0.54003-0.32129-0.229-0.23926-0.30079-0.53321-0.01367-0.08545-0.0205-0.25293-0.00684-0.16748 0.00683-0.25293l0.01367-0.08203 1.20313 1.2168q0.15723 0.15381 0.18457 0.19141 0.02734 0.03418 0 0.04785z"
                      fill="#A3A7AF"
                     />
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Recuperar contraseña"
              className="box-border w-full h-[24px] shrink-0 flex flex-row gap-0 justify-end items-center"
            >
              <div
                data-pencil-name="Olvidaste tu contraseña"
                className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                ¿Olvidaste tu contraseña?
              </div>
            </div>
            <div
              data-pencil-name="Iniciar sesión"
              role="button"
 onClick={() => navigate(ROUTES.home)}
 className="cursor-pointer box-border w-full h-[56px] shrink-0 [box-shadow:0px_7px_18px_#F2643040] flex flex-row gap-0 p-[0px_18px] justify-between items-center bg-[#F26430] rounded-[18px]"
            >
              <div
                data-pencil-name="Texto Iniciar sesión"
                className="text-[14px]/[normal] box-border text-[#2A2D34] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Iniciar sesión
              </div>
              <svg
                data-pencil-name="Flecha iniciar sesión"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[20px] shrink-0 h-[20px]"
              >
                <path
                  d="M6.90088 2.35156q-0.18115 0.02734-0.32129 0.16748-0.11279 0.11279-0.14697 0.28028-0.03418 0.16748 0.02051 0.32129 0.02734 0.08545 0.25976 0.3247 0.23242 0.23584 1.36377 1.37061 1.58252 1.58252 1.58252 1.59619 0 0.01367-3.45557 0.01367l-3.44531 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.53321 0.03418l3.01123 0q3.42822 0 3.42822 0.01367 0 0.01367-1.58252 1.59619-1.13135 1.13477-1.36377 1.37402-0.23242 0.23584-0.25976 0.3213-0.05469 0.15381-0.02051 0.32128 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.04102 0q0.11279 0 0.19824-0.05469 0.14014-0.09912 0.51611-0.46484l1.68164-1.67822q2.1123-2.10205 2.15332-2.18409 0.07178-0.12646 0.07178-0.28027 0-0.15381-0.07178-0.28027-0.04102-0.08203-2.1499-2.18067-2.10547-2.10205-2.17725-2.13623-0.06836-0.0376-0.23584-0.06494-0.04102 0-0.12646 0.01367z"
                  fill="#2A2D34"
                 />
              </svg>
            </div>
            <div
              data-pencil-name="Separador de acceso"
              className="box-border w-full h-[20px] shrink-0 flex flex-row gap-[10px] justify-start items-center"
            >
              <div
                data-pencil-name="Línea izquierda"
                className="box-border [flex:1_1_0] h-[1px] flex flex-row gap-0 justify-start items-start bg-[#454A54]"
              ></div>
              <div
                data-pencil-name="O bien"
                className="text-[8px]/[normal] box-border text-[#777C86] font-[Geist,system-ui,sans-serif] font-bold tracking-[1px] text-left [white-space:nowrap]"
              >
                O BIEN
              </div>
              <div
                data-pencil-name="Línea derecha"
                className="box-border [flex:1_1_0] h-[1px] flex flex-row gap-0 justify-start items-start bg-[#454A54]"
              ></div>
            </div>
            <div
              data-pencil-name="Solicitud de acceso"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] justify-start items-center"
            >
              <div
                data-pencil-name="Pregunta acceso"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[5px] justify-start items-center"
              >
                <div
                  data-pencil-name="Sin cuenta"
                  className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  ¿Todavía no tenés una cuenta?
                </div>
                <div
                  data-pencil-name="Solicitar acceso"
                  className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  Solicitar acceso
                </div>
              </div>
              <div
                data-pencil-name="Explicación acceso"
                className="text-[10px]/[13px] box-border w-[310px] text-[#777C86] font-[Geist,system-ui,sans-serif] font-normal text-center"
              >
                Tu gimnasio debe registrarte para que puedas acceder a FITCORE.
              </div>
            </div>
          </div>
          <div
            data-pencil-name="Pie legal"
            className="box-border w-full [flex:1_1_0] flex flex-col gap-[8px] p-[16px_20px_24px_20px] justify-end items-center"
          >
            <div
              data-pencil-name="Aceptación legal"
              className="text-[9px]/[normal] box-border text-[#777C86] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              Al continuar, aceptás nuestros
            </div>
            <div
              data-pencil-name="Enlaces legales"
              className="box-border w-fit h-fit shrink-0 flex flex-row gap-[5px] justify-start items-center"
            >
              <div
                data-pencil-name="Términos y condiciones"
                className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Términos y condiciones
              </div>
              <div
                data-pencil-name="Separador legal"
                className="text-[9px]/[normal] box-border text-[#777C86] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                ·
              </div>
              <div
                data-pencil-name="Política de privacidad"
                className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Política de privacidad
              </div>
            </div>
            <div
              data-pencil-name="Copyright FITCORE"
              className="text-[9px]/[normal] box-border text-[#777C86] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
            >
              © 2026 FITCORE
            </div>
          </div>
        </div>
  )
}
