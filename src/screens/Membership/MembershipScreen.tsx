import { useNavigate } from 'react-router'
import { ROUTES } from '../../routes'

export function Component() {
  const navigate = useNavigate()

  return (
    <div
          data-pencil-name="FITCORE — Detalles de mi membresía"
          className="box-border w-[390px] h-fit flex flex-col gap-0 justify-start items-start bg-[#2A2D34] overflow-hidden"
        >
          <div
            data-pencil-name="Contenido Mi membresía"
            className="box-border w-full [flex:1_1_0] flex flex-col gap-[22px] p-[16px_20px_32px_20px] justify-start items-start"
          >
            <div
              data-pencil-name="Cabecera Mi membresía"
              className="box-border w-full h-[88px] shrink-0 flex flex-row gap-0 justify-between items-center"
            >
              <div
                data-pencil-name="Volver"
                role="button"
 onClick={() => navigate(-1)}
 className="cursor-pointer box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
              >
                <svg
                  data-pencil-name="Flecha atrás"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[19px] shrink-0 h-[19px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.0957 0.01367-0.16748 0.05127-0.06836 0.03418-2.17725 2.13623-2.10547 2.09863-2.14648 2.16699-0.11279 0.18115-0.07178 0.40674 0.02734 0.0957 0.06836 0.17432 0.04443 0.0752 2.15674 2.17725l1.68164 1.67822q0.37598 0.36572 0.51611 0.46484 0.08545 0.05469 0.19824 0.05469l0.04102 0q0.23926 0 0.42041-0.18115 0.11279-0.11279 0.14697-0.28028 0.03418-0.16748-0.02051-0.32128-0.02734-0.08545-0.25976-0.3213-0.23242-0.23926-1.36377-1.37402-1.58252-1.58252-1.58252-1.59619 0-0.01367 3.42822-0.01367l3.01123 0q0.44775 0 0.52979-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.44531 0q-3.45557 0-3.45557-0.01367 0-0.01367 1.58252-1.59619 1.13135-1.13477 1.36377-1.37061 0.23242-0.23926 0.25976-0.3247 0.06836-0.2085-0.00341-0.40332-0.06836-0.19824-0.24268-0.30079-0.17432-0.10596-0.3999-0.06494z"
                    fill="#F5F7F4"
                   />
                </svg>
              </div>
              <div
                data-pencil-name="Título Mi membresía"
                className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] p-[0px_14px] justify-start items-start"
              >
                <div
                  data-pencil-name="Mi membresía"
                  className="text-[24px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Mi membresía
                </div>
                <div
                  data-pencil-name="Subtítulo membresía"
                  className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Detalles de tu plan actual
                </div>
              </div>
              <div
                data-pencil-name="Icono membresía"
                className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
              >
                <svg
                  data-pencil-name="Tarjeta"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[19px] shrink-0 h-[19px]"
                >
                  <path
                    d="M2.15674 2.35156q-0.29395 0.02734-0.58789 0.16748-0.29395 0.14014-0.50586 0.3794-0.30762 0.32129-0.43408 0.79638l-0.04102 0.1709 0 6.29932 0.04102 0.16748q0.07178 0.25293 0.18115 0.44092 0.11279 0.18799 0.29394 0.37256 0.18457 0.18115 0.37256 0.29394 0.18799 0.10938 0.44092 0.18115l0.16748 0.04102 9.83008 0 0.16748-0.04102q0.25293-0.07178 0.44092-0.18115 0.18799-0.11279 0.36914-0.29394 0.18457-0.18457 0.29394-0.37256 0.11279-0.18799 0.18457-0.44092l0.04102-0.16748 0-6.33008-0.04102-0.16748q-0.12646-0.46143-0.43408-0.76904-0.44775-0.48877-1.13476-0.56055-0.16748-0.01367-4.81592-0.01367-4.64844 0-4.82959 0.02734z m9.74463 1.20313q0.19482 0.09912 0.29394 0.29394l0.04102 0.09912 0.01367 1.30225-10.5 0 0.01367-1.30225 0.04102-0.09912q0.11279-0.24951 0.37939-0.32129 0.08545-0.02734 4.85694-0.02734l4.76123 0.01367 0.09912 0.04102z m0.34863 4.67578l-0.01367 1.82178-0.02735 0.08545q-0.12646 0.26318-0.37939 0.33496-0.08203 0.02734-4.82959 0.02734-4.74756 0-4.82959-0.02734-0.25293-0.07178-0.37939-0.33496l-0.02735-0.08545-0.01367-3.62647 10.5 0 0 1.80469z"
                    fill="#F5F7F4"
                   />
                </svg>
              </div>
            </div>
            <div
              data-pencil-name="Plan Premium destacado"
              className="box-border w-full h-[306px] shrink-0 flex flex-col gap-[14px] p-[18px] justify-start items-start [background-image:linear-gradient(-151.926deg,_#3B3F48_13.848%,_#252830_86.152%)] bg-no-repeat bg-[length:100%_100%] [outline:1px_solid_#4A4F59] [outline-offset:-0.5px] rounded-[24px]"
            >
              <div
                data-pencil-name="Plan y estado"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Nombre del plan actual"
                  className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Etiqueta plan actual"
                    className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-bold tracking-[1.1px] text-left [white-space:nowrap]"
                  >
                    TU PLAN ACTUAL
                  </div>
                  <div
                    data-pencil-name="Plan Premium"
                    className="text-[22px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Plan Premium
                  </div>
                  <div
                    data-pencil-name="FITCORE Gym"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    FITCORE Gym
                  </div>
                </div>
                <div
                  data-pencil-name="Estado Activa"
                  className="box-border w-fit shrink-0 h-[28px] flex flex-row gap-[6px] p-[0px_10px] justify-start items-center bg-[#F2643017] [outline:1px_solid_#F2643055] [outline-offset:-0.5px] rounded-[14px]"
                >
                  <div
                    data-pencil-name="Punto activo"
                    className="box-border w-[7px] shrink-0 h-[7px] bg-[#F26430] rounded-[50%]"
                  ></div>
                  <div
                    data-pencil-name="Activa"
                    className="text-[10px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                  >
                    Activa
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Precio de membresía"
                className="box-border w-fit h-fit shrink-0 flex flex-row gap-[7px] justify-start items-end"
              >
                <div
                  data-pencil-name="Monto mensual"
                  className="text-[32px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-extrabold text-left [white-space:nowrap]"
                >
                  $35.000
                </div>
                <div
                  data-pencil-name="Por mes"
                  className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  por mes
                </div>
              </div>
              <div
                data-pencil-name="Divisor plan"
                className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#4A4F59]"
              ></div>
              <div
                data-pencil-name="Fechas de vigencia"
                className="box-border w-full h-[54px] shrink-0 flex flex-row gap-[10px] justify-start items-start"
              >
                <div
                  data-pencil-name="Inicio del período"
                  className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Etiqueta inicio"
                    className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Inicio del período
                  </div>
                  <div
                    data-pencil-name="Fecha inicio"
                    className="text-[13px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                  >
                    28 sep 2026
                  </div>
                </div>
                <div
                  data-pencil-name="Vencimiento"
                  className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Etiqueta vencimiento"
                    className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Vencimiento
                  </div>
                  <div
                    data-pencil-name="Fecha vencimiento"
                    className="text-[13px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                  >
                    28 oct 2026
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Vigencia actual"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
              >
                <div
                  data-pencil-name="Etiqueta vigencia"
                  className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Vigencia de tu membresía
                </div>
                <div
                  data-pencil-name="Días restantes"
                  className="text-[10px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  10 días restantes
                </div>
              </div>
              <div
                data-pencil-name="Barra de vigencia"
                className="box-border w-full h-[8px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#4A4F59] rounded-[4px]"
              >
                <div
                  data-pencil-name="Período transcurrido"
                  className="box-border w-[210px] shrink-0 h-full flex flex-row gap-0 justify-start items-start bg-[#F26430] rounded-[4px]"
                ></div>
              </div>
            </div>
            <div
              data-pencil-name="Beneficios de tu plan"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Cabecera beneficios"
                className="box-border w-fit h-fit shrink-0 flex flex-col gap-[4px] justify-start items-start"
              >
                <div
                  data-pencil-name="Título Beneficios de tu plan"
                  className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  Beneficios de tu plan
                </div>
                <div
                  data-pencil-name="Subtítulo beneficios"
                  className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Todo lo que incluye tu membresía.
                </div>
              </div>
              <div
                data-pencil-name="Lista de beneficios"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[4px_14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Acceso ilimitado al gimnasio"
                  className="box-border w-full h-[64px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Acceso ilimitado al gimnasio"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Icono Acceso ilimitado al gimnasio"
                      className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center bg-[#252830] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="dumbbell"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                          fill="#D0D2D7"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Acceso ilimitado al gimnasio"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Título Acceso ilimitado al gimnasio"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Acceso ilimitado al gimnasio
                      </div>
                      <div
                        data-pencil-name="Descripción Acceso ilimitado al gimnasio"
                        className="text-[9px]/[11px] box-border w-[230px] text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                      >
                        Entrená durante los horarios habilitados.
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Incluido Acceso ilimitado al gimnasio"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[18px] shrink-0 h-[18px]"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                      fill="#F26430"
                     />
                  </svg>
                </div>
                <div
                  data-pencil-name="Divisor Acceso ilimitado al gimnasio"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Rutinas personalizadas"
                  className="box-border w-full h-[64px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Rutinas personalizadas"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Icono Rutinas personalizadas"
                      className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center bg-[#252830] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="clipboard-list"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M5.12354 0.58789q-0.18115 0.02734-0.30762 0.07861-0.12646 0.04785-0.28028 0.16065-0.39307 0.29395-0.44775 0.82373l-0.01367 0.09912-0.33496 0q-0.51953 0-0.78614 0.08545-0.46143 0.16748-0.76904 0.51953-0.30762 0.34863-0.40674 0.81006-0.01367 0.12646-0.02734 0.71435l0 6.96924q0.01367 0.79981 0.02734 1.03907 0.01367 0.18115 0.05811 0.30761l0.01367 0.02735q0.14014 0.44775 0.48877 0.75537 0.34863 0.30762 0.81348 0.40674 0.10938 0.01367 0.66992 0.02734l3.17871 0 3.17871 0q0.56055-0.01367 0.66992-0.02734 0.46484-0.09912 0.81348-0.40674 0.34863-0.30762 0.48877-0.75537l0.01367-0.02735q0.04443-0.12646 0.05811-0.30761 0.01367-0.23926 0.02734-1.03907l0-6.96924q-0.01367-0.58789-0.02734-0.71435-0.09912-0.46143-0.40674-0.81006-0.30762-0.35205-0.76905-0.51953-0.2666-0.08545-0.78613-0.08545l-0.33496 0-0.01367-0.09912q-0.04102-0.32129-0.21191-0.56397-0.16748-0.24609-0.44776-0.38623l-0.02734-0.01367q-0.0957-0.05811-0.19483-0.07178-0.12646-0.01367-0.48877-0.02734l-1.45605 0q-1.83545-0.01367-1.96191 0z m3.62646 1.75l0 0.58789-3.5 0 0-1.17578 3.5 0 0 0.58789z m-4.66211 0.70068q0.02734 0.2085 0.10254 0.36914 0.07861 0.16064 0.24609 0.33155 0.23926 0.23584 0.53321 0.30761 0.12646 0.02734 2.03027 0.02735 1.90381 0 2.03027-0.02735 0.29395-0.07178 0.53321-0.30761 0.16748-0.1709 0.24267-0.33155 0.07861-0.16064 0.10596-0.38281l0.01367-0.09912 0.36572 0q0.27685 0 0.33838 0.00684 0.06494 0.00684 0.12305 0.04785 0.18115 0.08545 0.2666 0.2666l0.05469 0.08545 0 8.44238-0.02734 0.0957q-0.04443 0.09912-0.12989 0.19141-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-7.30762 0-0.09912-0.04102q-0.08203-0.04443-0.16748-0.1333-0.08203-0.09228-0.12646-0.19141l-0.02735-0.0957 0-8.44238 0.05469-0.08545q0.12646-0.23584 0.36572-0.30762 0.04102-0.01367 0.3794-0.01367l0.34863 0 0.01367 0.11279z m0.48877 2.81299q-0.23584 0.02734-0.38281 0.23242-0.14697 0.20166-0.09229 0.44092 0.02734 0.18115 0.15381 0.29395 0.16748 0.16748 0.42041 0.16748 0.14014 0 0.23926-0.04102 0.2085-0.09912 0.28369-0.29394 0.07861-0.19824 0.03076-0.39991-0.04785-0.20508-0.23242-0.32128-0.18115-0.11963-0.42041-0.07862z m2.32422 0q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041l0.09912 0.04102 2.63184 0 0.09912-0.04102q0.08203-0.04443 0.15723-0.11279 0.07861-0.07178 0.11279-0.14014 0.0376-0.07178 0.05127-0.18115 0.04102-0.19824-0.05127-0.36572-0.08887-0.16748-0.28369-0.2666l-0.09912-0.04102-1.23389 0q-1.24414 0-1.32959 0.01367z m-2.37891 2.91211q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.39307 0.1333 0.17432 0.36914 0.21533 0.29395 0.04102 0.51953-0.18115 0.19482-0.21191 0.14697-0.49903-0.04785-0.28711-0.31445-0.41357-0.08545-0.04102-0.20508-0.05469-0.11621-0.01367-0.20166 0z m2.32422 0.01367q-0.25293 0.05811-0.36572 0.29737-0.10938 0.23584-0.02735 0.47168 0.04443 0.09912 0.12647 0.18457 0.08545 0.08203 0.18115 0.14013l0.1128 0.04102 1.23388 0q1.2168 0.01367 1.31592 0 0.24951-0.05469 0.38281-0.24951 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.1128-0.14014-0.0752-0.07178-0.15722-0.11621l-0.09912-0.04102-1.2749-0.01367q-1.28857 0-1.35694 0.02734z"
                          fill="#D0D2D7"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Rutinas personalizadas"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Título Rutinas personalizadas"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Rutinas personalizadas
                      </div>
                      <div
                        data-pencil-name="Descripción Rutinas personalizadas"
                        className="text-[9px]/[11px] box-border w-[230px] text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                      >
                        Accedé a los entrenamientos asignados por tu profesor.
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Incluido Rutinas personalizadas"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[18px] shrink-0 h-[18px]"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                      fill="#F26430"
                     />
                  </svg>
                </div>
                <div
                  data-pencil-name="Divisor Rutinas personalizadas"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Seguimiento de progreso"
                  className="box-border w-full h-[64px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Seguimiento de progreso"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Icono Seguimiento de progreso"
                      className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center bg-[#252830] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="chart-no-axes-column"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M6.84619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 10.83496 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.12988-0.15381l0.04102-0.08545 0-10.83496-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m4.03321 3.51368q-0.09912 0.04443-0.19141 0.12988-0.08887 0.08203-0.1333 0.16406l-0.04102 0.09912 0 7.30762 0.04102 0.09912q0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115l0.04102-0.1128 0-7.25292-0.04102-0.1128q-0.09912-0.19482-0.29394-0.29394-0.08545-0.04102-0.21875-0.04102-0.1333 0-0.229 0.02734z m-8.14844 3.5q-0.23926 0.08545-0.35205 0.33837l-0.04102 0.08204 0 3.75292 0.04102 0.1128q0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445l0.04102-0.09912 0-3.80762-0.04102-0.09912q-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02735z"
                          fill="#D0D2D7"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Seguimiento de progreso"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Título Seguimiento de progreso"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Seguimiento de progreso
                      </div>
                      <div
                        data-pencil-name="Descripción Seguimiento de progreso"
                        className="text-[9px]/[11px] box-border w-[230px] text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                      >
                        Consultá tu actividad y evolución.
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Incluido Seguimiento de progreso"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[18px] shrink-0 h-[18px]"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                      fill="#F26430"
                     />
                  </svg>
                </div>
                <div
                  data-pencil-name="Divisor Seguimiento de progreso"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Acceso mediante QR"
                  className="box-border w-full h-[64px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Acceso mediante QR"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Icono Acceso mediante QR"
                      className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center bg-[#252830] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="scan-line"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M2.60449 1.20313q-0.43408 0.07178-0.77929 0.35205-0.3418 0.28027-0.50928 0.66992l-0.01367 0.01367q-0.08545 0.21191-0.10596 0.35205-0.02051 0.14014-0.02051 0.75537l0 0.05469q0 0.57422 0 0.69385 0 0.11963 0.03418 0.21191 0.0376 0.08887 0.11963 0.17432 0.18115 0.18115 0.42041 0.18115 0.23926 0 0.40674-0.16748l0.01367-0.01367q0.08203-0.08545 0.10938-0.14014 0.03076-0.05811 0.03076-0.23926 0.01367-0.11279 0.01367-0.54687l0.01367-0.76905 0.04102-0.09912q0.09912-0.2085 0.30761-0.30761l0.09912-0.04102 0.76905-0.01367q0.43408 0 0.54687-0.01367 0.18115 0 0.23584-0.02735 0.05811-0.03076 0.14356-0.11279l0.01367-0.01367q0.16748-0.16748 0.16748-0.40674 0-0.23926-0.16748-0.40674-0.07178-0.06836-0.16748-0.12646l-0.08545-0.04102-0.75537 0q-0.76904 0-0.88184 0.02735z m7.12647-0.00001q-0.18457 0.05811-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.16748 0.40674l0.01367 0.01367q0.08545 0.08203 0.14014 0.11279 0.05811 0.02734 0.23926 0.02735 0.11279 0.01367 0.54687 0.01367l0.76904 0.01367 0.09913 0.04102q0.2085 0.09912 0.30761 0.30761l0.04102 0.09912 0.01367 0.76905q0 0.43408 0.01367 0.54687 0 0.18115 0.02735 0.23926 0.03076 0.05469 0.11279 0.14014l0.01367 0.01367q0.12647 0.12646 0.30078 0.16064 0.17432 0.03418 0.34522-0.03418 0.0957-0.05811 0.17773-0.14013 0.08545-0.08545 0.11963-0.17432 0.0376-0.09229 0.0376-0.21191 0-0.11963 0-0.69385 0-0.57422-0.00684-0.7041-0.00684-0.1333-0.03418-0.21875-0.25293-0.81348-0.98095-1.14844-0.14014-0.06836-0.28028-0.11279-0.09912-0.02734-0.23242-0.03418-0.12988-0.00684-0.7041-0.00684-0.7998 0-0.85449 0.02734z m-5.85157 5.25q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 6.0498 0 0.0957-0.02735q0.21192-0.08545 0.32471-0.29394 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.17431-0.11963-0.08203-0.0376-0.4751-0.0376l-2.65918 0-2.64551 0q-0.42041 0.01367-0.4751 0.02734z m-2.22851 2.89844q-0.15381 0.01367-0.27344 0.11963-0.11621 0.10596-0.17432 0.23242-0.02734 0.08203-0.02734 0.20166 0 0.11963 0 0.69385 0 0.57422 0.00684 0.70752 0.00684 0.12988 0.03418 0.21533 0.29395 0.96729 1.26123 1.26123 0.08545 0.02734 0.21533 0.03418 0.1333 0.00684 0.70752 0.00684 0.57422 0 0.69385 0 0.11963 0 0.20849-0.03418 0.09229-0.0376 0.17432-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394-0.05811-0.02734-0.16406-0.03418-0.10254-0.00684-0.66309-0.01367-0.56055-0.00684-0.68018-0.02051-0.11621-0.01367-0.21533-0.07178-0.14014-0.0957-0.22558-0.26318l-0.04102-0.09913-0.02734-1.34326q0-0.14014-0.02735-0.18457-0.08545-0.18115-0.25976-0.27685-0.17432-0.09912-0.37256-0.05811z m10.5 0q-0.18115 0.02734-0.32129 0.16748-0.08203 0.08545-0.11279 0.15039-0.02734 0.06152-0.02735 0.22901-0.01367 0.12646-0.01367 0.56054l-0.01367 0.75537-0.04102 0.09913q-0.08545 0.16748-0.22558 0.26318-0.09912 0.05811-0.21875 0.07178-0.11621 0.01367-0.67676 0.02051-0.56055 0.00684-0.6665 0.01367-0.10254 0.00684-0.16065 0.03418-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.17432 0.11963 0.09229 0.03418 0.21191 0.03418 0.11963 0 0.69385 0 0.57422 0 0.7041-0.00684 0.1333-0.00684 0.21875-0.03418 0.96729-0.29395 1.26123-1.26123 0.02734-0.08545 0.03418-0.21533 0.00684-0.1333 0.00684-0.69385l0-0.63232q0-0.19482-0.02051-0.26318-0.02051-0.07178-0.09228-0.15381-0.09912-0.12646-0.2461-0.18116-0.14697-0.05811-0.31445-0.03076z"
                          fill="#D0D2D7"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Acceso mediante QR"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Título Acceso mediante QR"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Acceso mediante QR
                      </div>
                      <div
                        data-pencil-name="Descripción Acceso mediante QR"
                        className="text-[9px]/[11px] box-border w-[230px] text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                      >
                        Escaneá el QR del gimnasio desde la sección Acceso.
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Incluido Acceso mediante QR"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[18px] shrink-0 h-[18px]"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                      fill="#F26430"
                     />
                  </svg>
                </div>
                <div
                  data-pencil-name="Divisor Acceso mediante QR"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Clases grupales"
                  className="box-border w-full h-[64px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Clases grupales"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Icono Clases grupales"
                      className="box-border w-[36px] shrink-0 h-[36px] flex flex-row gap-0 justify-center items-center bg-[#252830] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="users"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M4.84326 1.20313q-0.81006 0.11279-1.42871 0.61865-0.61523 0.50244-0.89551 1.24414-0.18115 0.48877-0.18115 1.02197 0 0.28027 0.04102 0.50586 0.04443 0.22217 0.14013 0.48877 0.15381 0.46143 0.46826 0.84766 0.31787 0.38281 0.7212 0.63574 0.36572 0.22559 0.73486 0.32471 0.37256 0.0957 0.80664 0.0957 0.22559 0 0.3623-0.01367 0.14014-0.01367 0.35206-0.05811 0.60156-0.15381 1.104-0.55713 0.50586-0.40674 0.7998-0.98096 0.19482-0.39307 0.26661-0.88183 0.02734-0.14014 0.02734-0.40674 0-0.2666-0.02734-0.40674-0.09912-0.65625-0.46485-1.20312-0.3623-0.54688-0.93652-0.89551-0.43408-0.2666-0.98096-0.36572-0.15381-0.02734-0.45459-0.03418-0.30078-0.00684-0.45459 0.02051z m4.34082 0.0581q-0.14014 0.04102-0.25293 0.14014-0.11279 0.0957-0.15381 0.2666-0.04102 0.16748 0 0.32129 0.04102 0.15381 0.15381 0.25293 0.11279 0.0957 0.33838 0.18115 0.24951 0.08203 0.40332 0.17432 0.15381 0.08887 0.30762 0.25976 0.33838 0.33496 0.45459 0.76904 0.11963 0.43408 0.01367 0.86817-0.10254 0.43408-0.41699 0.76904-0.31445 0.33496-0.7793 0.48877-0.19482 0.07178-0.28711 0.14356-0.08887 0.06836-0.16064 0.20849-0.05469 0.09912-0.05469 0.23926 0 0.13672 0.05469 0.23584 0.08545 0.19482 0.28027 0.29395 0.12646 0.05811 0.25293 0.05126 0.12646-0.01025 0.33496-0.07861 0.35205-0.11279 0.6084-0.27344 0.25977-0.16064 0.5127-0.42724 0.78271-0.78271 0.85449-1.84912 0.09912-1.18945-0.70069-2.12598-0.48877-0.58789-1.2749-0.85449-0.33496-0.11279-0.48877-0.05469z m-3.73926 1.09033q0.40674 0.02734 0.78272 0.28711 0.37939 0.25977 0.58105 0.65967 0.20508 0.39648 0.18457 0.88184-0.02051 0.48193-0.28711 0.86132-0.15381 0.23584-0.37939 0.41358-0.22217 0.17432-0.46143 0.27002-0.19482 0.05811-0.2871 0.07861-0.08887 0.02051-0.32813 0.02051-0.23926 0-0.33154-0.02051-0.08887-0.02051-0.28369-0.07861-0.39307-0.14014-0.68018-0.46826-0.28711-0.32813-0.3999-0.73487-0.10938-0.46143 0.01367-0.90918 0.12646-0.44775 0.45459-0.76904 0.33154-0.32471 0.79297-0.45117 0.08545-0.02734 0.24609-0.04785 0.16064-0.02051 0.21533-0.00684l0.16748 0.01367z m-2.35156 5.85156q-0.96387 0.14014-1.65088 0.82715-0.54687 0.54688-0.75537 1.31592-0.07178 0.23926-0.08545 0.44092-0.01367 0.20166-0.01367 0.82031l0 0.76904 0.04102 0.1128q0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445l0.04102-0.09912 0.01367-0.79639q0.01367-0.61865 0.02734-0.77246 0.01367-0.15381 0.07178-0.34863 0.14014-0.37939 0.46826-0.68018 0.32813-0.30078 0.73487-0.41357 0.15381-0.04102 0.53662-0.05469 0.38623-0.01367 1.66113-0.01367 1.2749 0 1.65771 0.01367 0.38623 0.01367 0.54004 0.05469 0.42041 0.11279 0.75538 0.43066 0.33838 0.31445 0.46142 0.71778 0.05811 0.16748 0.06494 0.3247 0.00684 0.15381 0.02051 0.7417l0.01367 0.79639 0.04102 0.09912q0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115l0.04102-0.1128 0-0.76904q0-0.61865-0.01367-0.82031-0.01367-0.20166-0.08545-0.44092-0.08203-0.32129-0.23584-0.61523-0.2666-0.51953-0.73828-0.90235-0.46826-0.38623-1.02539-0.54004l-0.04444-0.01367q-0.16748-0.05811-0.29394-0.07178-0.15381-0.01367-0.56055-0.01367l-1.60986-0.01367q-2.05762 0-2.21143 0.02734z m7.85449 0.05811q-0.23926 0.05469-0.36572 0.27344-0.12305 0.21533-0.05469 0.45459 0.05811 0.19482 0.21192 0.30761 0.06836 0.04102 0.28027 0.12647 0.24951 0.08203 0.40332 0.17432 0.15381 0.08887 0.32471 0.27343 0.33496 0.34863 0.44775 0.78272 0.02734 0.11279 0.03418 0.24609 0.00684 0.1333 0.02051 0.70752l0.01367 0.79639 0.04102 0.09912q0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115l0.04102-0.1128 0.01367-0.64599q0-0.64258-0.02734-0.95703-0.02734-0.31445-0.12647-0.59473-0.14014-0.42041-0.42724-0.81006-0.28711-0.39307-0.64942-0.65967-0.31103-0.22559-0.69726-0.35888-0.38281-0.1333-0.5503-0.08887z"
                          fill="#D0D2D7"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Clases grupales"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Título Clases grupales"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Clases grupales
                      </div>
                      <div
                        data-pencil-name="Descripción Clases grupales"
                        className="text-[9px]/[11px] box-border w-[230px] text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                      >
                        Acceso a clases incluidas, sujeto a disponibilidad.
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Incluido Clases grupales"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[18px] shrink-0 h-[18px]"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                      fill="#F26430"
                     />
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Facturación y renovación"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Título Facturación y renovación"
                className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
              >
                Facturación y renovación
              </div>
              <div
                data-pencil-name="Información de facturación"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[4px_14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Precio del plan"
                  className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Etiqueta Precio del plan"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Precio del plan
                  </div>
                  <div
                    data-pencil-name="Valor Precio del plan"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Texto Precio del plan"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      $35.000 ARS
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Divisor Precio del plan"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Frecuencia"
                  className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Etiqueta Frecuencia"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Frecuencia
                  </div>
                  <div
                    data-pencil-name="Valor Frecuencia"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Texto Frecuencia"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Mensual
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Divisor Frecuencia"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Último pago"
                  className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Etiqueta Último pago"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Último pago
                  </div>
                  <div
                    data-pencil-name="Valor Último pago"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Punto pagado"
                      className="box-border w-[7px] shrink-0 h-[7px] bg-[#F26430] rounded-[50%]"
                    ></div>
                    <div
                      data-pencil-name="Texto Último pago"
                      className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      28 sep 2026
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Divisor Último pago"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Próximo vencimiento"
                  className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Etiqueta Próximo vencimiento"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Próximo vencimiento
                  </div>
                  <div
                    data-pencil-name="Valor Próximo vencimiento"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Texto Próximo vencimiento"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      28 oct 2026
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Divisor Próximo vencimiento"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Modalidad de renovación"
                  className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Etiqueta Modalidad de renovación"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Modalidad de renovación
                  </div>
                  <div
                    data-pencil-name="Valor Modalidad de renovación"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Texto Modalidad de renovación"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Renovación manual
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Ver historial de pagos"
                  role="button"
 onClick={() => navigate(ROUTES.payments)}
 className="cursor-pointer box-border w-full h-[52px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Acción historial"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[9px] justify-start items-center"
                  >
                    <svg
                      data-pencil-name="Recibo"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[18px] shrink-0 h-[18px]"
                    >
                      <path
                        d="M2.77197 0.60156q-0.34863 0.02734-0.63574 0.28711-0.28711 0.25977-0.35889 0.6084-0.02734 0.14014-0.02734 5.50293 0 5.36279 0.02734 5.50293 0.05811 0.29395 0.28028 0.54004 0.22559 0.24268 0.51953 0.32812 0.22217 0.06836 0.4751 0.04102 0.25293-0.02734 0.47509-0.15381 0.11279-0.04102 0.39991-0.229 0.28711-0.19141 0.32129-0.19825 0.03418-0.00684 0.0957 0.02735 0.06494 0.03418 0.31787 0.18799 0.42041 0.2666 0.65625 0.33154 0.23926 0.06152 0.49902 0.02734 0.25977-0.03418 0.48194-0.16064 0.09912-0.05811 0.37939-0.23926 0.28027-0.18115 0.32129-0.18115 0.04102 0 0.32129 0.18115 0.28027 0.18115 0.37939 0.23926 0.22217 0.12646 0.48194 0.16064 0.25977 0.03418 0.4956-0.02734 0.23926-0.06494 0.65967-0.33154 0.25293-0.15381 0.31445-0.18799 0.06494-0.03418 0.09912-0.02735 0.03418 0.00684 0.32813 0.20166 0.36572 0.23926 0.56055 0.31104 0.19482 0.06836 0.46142 0.06836 0.19482 0 0.33496-0.05469 0.29395-0.08545 0.50928-0.32129 0.21875-0.23926 0.27686-0.5332 0.02734-0.14014 0.02734-5.50293 0-5.36279-0.02734-5.50293-0.05811-0.24951-0.2461-0.48193-0.18799-0.23242-0.40674-0.32813-0.21533-0.09912-0.47509-0.09912-0.25977 0-0.48194 0.08545-0.14014 0.05469-0.54687 0.30762-0.2666 0.18115-0.31446 0.18799-0.04785 0.00684-0.11279-0.02735-0.06152-0.03418-0.32812-0.20508-0.33496-0.2085-0.51953-0.27685-0.18115-0.07178-0.44092-0.07178-0.25977 0-0.44092 0.07178-0.18115 0.06836-0.60156 0.34863-0.2666 0.16748-0.30762 0.16748-0.04102 0-0.30762-0.16748-0.42041-0.28027-0.60156-0.34863-0.18115-0.07178-0.44092-0.07178-0.25977 0-0.44433 0.07178-0.18115 0.06836-0.52979 0.27685-0.25293 0.1709-0.31787 0.20508-0.06152 0.03418-0.10937 0.02735-0.04785-0.00684-0.31446-0.18799l-0.36572-0.22559q-0.3623-0.19482-0.79639-0.15381z m0.48877 1.32959q0.39307 0.25293 0.57422 0.32471 0.18457 0.06836 0.44092 0.06836 0.25977 0 0.44092-0.06152 0.18457-0.06494 0.57422-0.31788 0.29395-0.19482 0.34863-0.19482 0.05811 0 0.38623 0.21191 0.33154 0.2085 0.42725 0.24952 0.25293 0.11279 0.55371 0.11279 0.30078 0 0.55371-0.11279 0.08203-0.04102 0.41015-0.24952 0.33154-0.21191 0.38623-0.21191 0.05811 0 0.35205 0.19482 0.38965 0.25293 0.57081 0.31788 0.18457 0.06152 0.44091 0.06152 0.25977 0 0.44092-0.06836 0.18457-0.07178 0.57764-0.32471 0.29395-0.18115 0.31445-0.18115 0.02051 0 0.02051 5.25l0 4.29639q0 0.95361-0.02051 0.95361-0.02051 0-0.32812-0.19482-0.36572-0.23926-0.56397-0.30762-0.19482-0.07178-0.44092-0.07178-0.24268 0-0.43408 0.06494-0.18799 0.06152-0.52295 0.28369l-0.32129 0.21192q-0.05811 0.02734-0.13672 0-0.0752-0.02734-0.29736-0.18115-0.37939-0.23926-0.56738-0.30762-0.18799-0.07178-0.44092-0.07178-0.25293 0-0.44092 0.07178-0.18799 0.06836-0.56738 0.30762-0.22217 0.15381-0.30078 0.18115-0.07861 0.02734-0.1333 0l-0.32129-0.21192q-0.34863-0.22217-0.51953-0.27685-0.19482-0.07178-0.44092-0.07178-0.24268 0-0.44092 0.07178-0.19482 0.06836-0.56055 0.30762-0.30762 0.19482-0.32812 0.19482-0.02051 0-0.02051-0.95361l0-4.29639q0-5.25 0.02051-5.25 0.02051 0 0.31445 0.19482l0-0.01367z m1.31592 2.15674q-0.23584 0.04102-0.38281 0.24609-0.14697 0.20166-0.09229 0.44092 0.01367 0.0957 0.04785 0.16748 0.0376 0.06836 0.1128 0.14014 0.07861 0.06836 0.16064 0.11279l0.09912 0.04102 3.33252 0.01367q0.3623-0.01367 0.4751-0.02734 0.08545-0.01367 0.15381-0.07178l0.02734-0.01367q0.19824-0.15381 0.23242-0.38282 0.03418-0.23242-0.10595-0.42724-0.14014-0.19824-0.37598-0.22559-0.09912-0.02734-1.83545-0.02734-1.73633 0-1.84912 0.01367z m-0.0957 2.36523q-0.23926 0.08545-0.34522 0.32471-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.40674 0.03418l2.15674 0 2.15674 0q0.32129 0 0.40332-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-2.47803 0q-2.47803 0-2.53271 0.02734z m0.04101 2.31055q-0.14014 0.04102-0.2666 0.16748-0.16748 0.15381-0.17432 0.37256-0.00684 0.21533 0.12647 0.38623 0.1333 0.16748 0.35547 0.2085 0.09912 0.02734 1.56201 0.02734 1.46289 0 1.56201-0.02734 0.23584-0.04102 0.36914-0.23584 0.1333-0.19824 0.09229-0.4375-0.01367-0.0957-0.05127-0.16406-0.03418-0.07178-0.11279-0.14014-0.0752-0.07178-0.15723-0.11621l-0.09912-0.04102-1.56885-0.01367q-1.56885 0-1.63721 0.01367z"
                        fill="#D0D2D7"
                       />
                    </svg>
                    <div
                      data-pencil-name="Texto historial"
                      className="text-[11px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Ver historial de pagos
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Flecha historial"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[17px] shrink-0 h-[17px]"
                  >
                    <path
                      d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                      fill="#777C86"
                     />
                  </svg>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Gestionar membresía"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Título Gestionar membresía"
                className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
              >
                Gestionar membresía
              </div>
              <div
                data-pencil-name="Acciones de membresía"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[10px] justify-start items-start"
              >
                <div
                  data-pencil-name="Ver mi credencial"
                  role="button"
 onClick={() => navigate(ROUTES.credential)}
 className="cursor-pointer box-border w-full h-[54px] shrink-0 flex flex-row gap-[9px] justify-center items-center bg-[#F26430] rounded-[18px]"
                >
                  <svg
                    data-pencil-name="Credencial"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[20px] shrink-0 h-[20px]"
                  >
                    <path
                      d="M4.57666 0.60156q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.1914 0.19483-0.04102 0.08545-0.05469 0.20508-0.01367 0.11621-0.01367 0.35546l0 0.29395-1.32959 0.01367q-0.14014 0.01367-0.23926 0.02735-0.50244 0.14014-0.85449 0.50586-0.34863 0.3623-0.44776 0.88183-0.02734 0.0957-0.02734 0.81006l0 7.99463 0.05469 0.15381q0.15723 0.51953 0.56055 0.86133 0.40674 0.3418 0.93994 0.3999 0.15381 0.02734 4.26904 0.02734 4.11523 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-7.99463q0-0.71436-0.02735-0.81006-0.09912-0.51953-0.45117-0.88183-0.34863-0.36572-0.85107-0.50586-0.09912-0.01367-0.23926-0.02735l-1.32959-0.01367 0-0.29395q0-0.32129-0.03418-0.45459-0.03418-0.1333-0.14697-0.24609-0.14014-0.14014-0.35889-0.16064-0.21533-0.02051-0.37597 0.09228-0.16064 0.10938-0.21875 0.29395-0.02734 0.05469-0.03418 0.1333-0.00684 0.0752-0.00684 0.30078l0 0.33496-3.5 0 0-0.34863q0-0.23926-0.00684-0.30762-0.00684-0.07178-0.03418-0.12646-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m6.69238 2.35156q0.12646 0.04443 0.22217 0.13672 0.09912 0.08887 0.14356 0.22901 0.01367 0.04102 0.02734 0.70068l0 3.48291q0.01367 4.10498-0.00684 4.22461-0.02051 0.11621-0.0581 0.19482-0.03418 0.0752-0.1128 0.15381-0.0752 0.07519-0.1538 0.1128-0.07519 0.03418-0.14014 0.04101-0.06152 0.00684-0.32813 0.02051l-0.3623 0 0-0.43408q-0.01367-0.29395-0.02051-0.38282-0.00684-0.09228-0.03418-0.20507-0.12646-0.43408-0.40674-0.7417-0.28027-0.30762-0.68701-0.46143l-0.04101-0.01367q-0.11279-0.04443-0.21192-0.05811-0.14014-0.01367-0.50244-0.01367l-3.34619 0q-0.32129 0-0.40674 0.02735-0.25293 0.07178-0.44092 0.17773-0.18799 0.10254-0.36914 0.27002-0.33838 0.32471-0.47851 0.81348-0.02734 0.11279-0.03418 0.20507-0.00684 0.08887-0.02051 0.38282l0 0.43408-0.3623 0q-0.2666-0.01367-0.33155-0.02051-0.06152-0.00684-0.1333-0.03418-0.28027-0.14014-0.32129-0.44775-0.02734-0.11279-0.01367-4.24512l0-3.48291q0.01367-0.65967 0.02734-0.71435 0.09912-0.25293 0.35206-0.35206 0.05469-0.01367 0.69726-0.02734l3.57178 0 3.51367 0q0.71435 0 0.76904 0.02734z m-4.36816 1.13477q-0.64258 0.02734-1.18262 0.38623-0.53662 0.35547-0.80322 0.92969-0.12646 0.25293-0.17774 0.44775-0.04785 0.19482-0.06152 0.4751-0.01367 0.28027 0.02734 0.50586 0.04443 0.22217 0.14014 0.4751 0.2666 0.646 0.86133 1.0459 0.59473 0.39648 1.29541 0.39648 0.62891 0 1.16211-0.31445 0.5332-0.31445 0.84766-0.84766 0.31445-0.5332 0.31445-1.16211 0-0.39307-0.11279-0.72803-0.23584-0.70068-0.80323-1.13476-0.56738-0.43408-1.30908-0.4751l-0.19824 0z m0.33838 1.18945q0.22217 0.04102 0.41015 0.17432 0.19141 0.1333 0.31788 0.33154 0.22217 0.33496 0.18115 0.76905-0.01367 0.2085-0.09912 0.37255-0.08203 0.16064-0.25293 0.32813-0.16748 0.16748-0.35547 0.24609-0.18799 0.0752-0.44092 0.0752-0.25293 0-0.44092-0.0752-0.18799-0.07861-0.35888-0.24609-0.16748-0.16748-0.25293-0.32813-0.08203-0.16406-0.09571-0.37255-0.05469-0.44775 0.18115-0.78272 0.19824-0.29395 0.52637-0.42724 0.32813-0.1333 0.68018-0.06495z m1.59619 5.82422q0.10938 0.01367 0.17773 0.05127 0.07178 0.03418 0.14698 0.11279 0.07861 0.0752 0.11279 0.14698 0.0376 0.06836 0.04443 0.1333 0.00684 0.06152 0.00684 0.3247l0 0.3794-4.64844 0 0-0.3794q0-0.26318 0.00684-0.3247 0.00684-0.06494 0.03418-0.12305 0.07178-0.12647 0.18115-0.21533 0.11279-0.09229 0.25293-0.10596 0.09912-0.02734 1.84228-0.02734 1.74316 0 1.84229 0.02734z"
                      fill="#2A2D34"
                     />
                  </svg>
                  <div
                    data-pencil-name="Texto Ver mi credencial"
                    className="text-[13px]/[normal] box-border text-[#2A2D34] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Ver mi credencial
                  </div>
                </div>
                <div
                  data-pencil-name="Consultar renovación"
                  className="box-border w-full h-[52px] shrink-0 flex flex-row gap-[9px] justify-center items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                >
                  <svg
                    data-pencil-name="Calendario renovación"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[19px] shrink-0 h-[19px]"
                  >
                    <path
                      d="M4.57666 0.60156q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.1914 0.19483-0.04102 0.08545-0.05469 0.20508-0.01367 0.11621-0.01367 0.35546l0 0.29395-1.32959 0.01367q-0.14014 0.01367-0.23926 0.02735-0.50244 0.14014-0.85449 0.50586-0.34863 0.3623-0.44776 0.88183-0.02734 0.0957-0.02734 0.81006l0 7.99463 0.05469 0.15381q0.15723 0.51953 0.56055 0.86133 0.40674 0.3418 0.93994 0.3999 0.15381 0.02734 4.26904 0.02734 4.11523 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-7.99463q0-0.71436-0.02735-0.81006-0.09912-0.51953-0.45117-0.88183-0.34863-0.36572-0.85107-0.50586-0.09912-0.01367-0.23926-0.02735l-1.32959-0.01367 0-0.29395q0-0.32129-0.03418-0.45459-0.03418-0.1333-0.14697-0.24609-0.14014-0.14014-0.35889-0.16064-0.21533-0.02051-0.37597 0.09228-0.16064 0.10938-0.21875 0.29395-0.02734 0.05469-0.03418 0.1333-0.00684 0.0752-0.00684 0.30078l0 0.33496-3.5 0 0-0.34863q0-0.23926-0.00684-0.30762-0.00684-0.07178-0.03418-0.12646-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m-0.50244 2.67285q0.01367 0.25293 0.02051 0.31788 0.00684 0.06152 0.03418 0.14697 0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445 0.02734-0.08545 0.03418-0.14014 0.00684-0.05811 0.02051-0.32129l0-0.36572 3.5 0 0 0.36572q0.01367 0.26318 0.02051 0.32129 0.00684 0.05469 0.03418 0.14014 0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115 0.02734-0.08545 0.03418-0.14697 0.00684-0.06494 0.02051-0.31788l0-0.34863 1.31592 0 0.08545 0.04102q0.08203 0.04443 0.15722 0.12304 0.07861 0.0752 0.11963 0.16065 0.04443 0.08203 0.05811 0.28027 0.01367 0.19482 0.01367 0.85108l0 0.86816-9.35156 0 0.01367-1.72266q0.01367-0.16748 0.02734-0.20849 0.09912-0.2666 0.35206-0.36572 0.05469-0.01367 0.16748-0.02735l1.18945 0 0 0.34863z m7.58789 5.82422q0 1.89014-0.00684 2.30371-0.00683 0.41357-0.0205 0.45459-0.09912 0.25293-0.35206 0.35205l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.02734-0.02734q-0.04443-0.05469-0.05811-0.15381-0.02734-0.14014-0.02734-0.60156l-0.01367-4.80225 9.35156 0-0.01367 2.67285z m-7.08545-1.49707q-0.23584 0.02734-0.38281 0.23242-0.14697 0.20166-0.09229 0.44092 0.02734 0.18115 0.15381 0.29395 0.16748 0.16748 0.42041 0.16748 0.14014 0 0.23926-0.04102 0.2085-0.09912 0.28369-0.29394 0.07861-0.19824 0.03076-0.39991-0.04785-0.20508-0.23242-0.32128-0.18115-0.11963-0.42041-0.07862z m2.32422 0q-0.18115 0.02734-0.32129 0.16748-0.2085 0.21191-0.15381 0.50586 0.05469 0.29395 0.32129 0.42041 0.09912 0.04102 0.25293 0.04102 0.25293 0 0.42041-0.16748 0.12646-0.12646 0.15381-0.30762 0.05469-0.29395-0.15723-0.50244-0.2085-0.21191-0.51611-0.15723z m2.32422 0q-0.18115 0.02734-0.32129 0.18115-0.14014 0.15381-0.15381 0.35206-0.01367 0.23584 0.16064 0.42724 0.17432 0.18799 0.42725 0.18799 0.19482 0 0.34863-0.11963 0.15381-0.11963 0.2085-0.30762 0.05811-0.18799-0.02051-0.37597-0.0752-0.19141-0.24951-0.28711-0.17432-0.09912-0.3999-0.05811z m-4.74414 2.35156q-0.18457 0.0581-0.29053 0.21192-0.10254 0.15381-0.10254 0.33496 0 0.23926 0.17432 0.41357 0.17432 0.17432 0.42041 0.16065 0.24609-0.01367 0.3999-0.16748 0.09912-0.09912 0.12646-0.18115 0.02734-0.08545 0.02735-0.23926 0-0.15381-0.04102-0.23926-0.08545-0.18115-0.2666-0.2666-0.08545-0.04102-0.23242-0.05469-0.14697-0.01367-0.21533 0.02734z m2.36523-0.01367q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.23926 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.15381 0.15381 0.3999 0.16748 0.24609 0.01367 0.42041-0.16065 0.17432-0.17432 0.17432-0.41357 0-0.23926-0.16748-0.3999-0.16748-0.16064-0.39307-0.17432-0.14014 0-0.18115 0.01367z m2.2832 0.01367q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.07178 0.15381 0.21875 0.23926 0.14697 0.08203 0.31445 0.08203 0.16748 0 0.30762-0.08203 0.14014-0.08545 0.22558-0.23926 0.04102-0.09912 0.04102-0.25293 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.05811-0.08203-0.14355-0.16406-0.08203-0.08545-0.18115-0.11963-0.0957-0.0376-0.21534-0.0376-0.11963 0-0.20166 0.02734z"
                      fill="#D0D2D7"
                     />
                  </svg>
                  <div
                    data-pencil-name="Texto Consultar renovación"
                    className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Consultar renovación
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Membresía activa información"
              className="box-border w-full h-[92px] shrink-0 flex flex-row gap-[12px] p-[14px] justify-start items-center bg-[#343840] [outline:1px_solid_#F2643044] [outline-offset:-0.5px] rounded-[20px]"
            >
              <div
                data-pencil-name="Icono membresía activa"
                className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#F2643014] rounded-[13px]"
              >
                <svg
                  data-pencil-name="Check activo"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[20px] shrink-0 h-[20px]"
                >
                  <path
                    d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                    fill="#F26430"
                   />
                </svg>
              </div>
              <div
                data-pencil-name="Texto membresía activa"
                className="box-border [flex:1_1_0] h-fit flex flex-col gap-[5px] justify-start items-start"
              >
                <div
                  data-pencil-name="Tu membresía está activa"
                  className="text-[13px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  Tu membresía está activa
                </div>
                <div
                  data-pencil-name="Descripción estado activo"
                  className="text-[10px]/[13px] box-border w-full text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                >
                  Podés utilizar las instalaciones y beneficios de tu plan hasta el 28 de octubre de
                  2026.
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Ayuda sobre el plan"
              className="box-border w-full h-[142px] shrink-0 flex flex-col gap-[10px] p-[16px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
            >
              <div
                data-pencil-name="Texto ayuda plan"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[5px] justify-start items-start"
              >
                <div
                  data-pencil-name="Dudas sobre tu plan"
                  className="text-[13px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  ¿Tenés dudas sobre tu plan?
                </div>
                <div
                  data-pencil-name="Descripción ayuda plan"
                  className="text-[10px]/[13px] box-border w-full text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                >
                  Contactá a tu gimnasio para consultar cambios de plan, renovaciones o beneficios.
                </div>
              </div>
              <div
                data-pencil-name="Contactar al gimnasio"
                className="box-border w-full h-[44px] shrink-0 flex flex-row gap-0 p-[0px_12px] justify-between items-center bg-[#2A2D34] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[15px]"
              >
                <div
                  data-pencil-name="Acción contactar"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-[8px] justify-start items-center"
                >
                  <svg
                    data-pencil-name="Mensaje"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[17px] shrink-0 h-[17px]"
                  >
                    <path
                      d="M6.80518 0.58789q-0.5332 0.01367-1.10059 0.1333-0.56738 0.11963-1.06982 0.31445-1.3877 0.56055-2.396 1.67481-1.0083 1.11084-1.41162 2.55322-0.30762 1.09375-0.22559 2.21485 0.08545 1.11768 0.54688 2.15332l0.01367 0.04101q0.06836 0.14014 0.07519 0.22559 0.01025 0.08203-0.04785 0.29394-0.04102 0.15381-0.20849 0.66992l-0.05811 0.14014q-0.30762 0.98096-0.33496 1.1211-0.01367 0.16748 0.02734 0.37255 0.04443 0.20166 0.14014 0.35547 0.05811 0.09912 0.17432 0.21875 0.11963 0.11621 0.21875 0.17432 0.16748 0.0957 0.3623 0.14014 0.19824 0.04101 0.3794 0.02734 0.12646-0.02734 1.14843-0.32129l0.14014-0.04443q0.54688-0.15381 0.70068-0.19483 0.22217-0.05469 0.29737-0.04785 0.07861 0.00684 0.20508 0.06152l0.02734 0.01368q0.88184 0.37939 1.97559 0.50586 0.16748 0.02734 0.59472 0.02734 0.42725 0 0.62207-0.02734 0.85449-0.08545 1.64405-0.3794 0.79297-0.29395 1.47998-0.78271 0.93652-0.65967 1.5791-1.60987 0.646-0.95361 0.92627-2.05761 0.28027-1.10742 0.15381-2.23877-0.12647-1.13477-0.646-2.17383-0.66992-1.35693-1.90381-2.27979-1.23047-0.92627-2.72754-1.17578-0.63232-0.11279-1.30224-0.09912z m0.58789 1.17578q1.38428 0.11279 2.5122 0.86133 1.12793 0.74854 1.77051 1.98242 0.40674 0.79639 0.5332 1.75 0.02734 0.22217 0.02735 0.64258 0 0.42041-0.02735 0.65967-0.16748 1.24414-0.85449 2.26611-0.68701 1.02197-1.76367 1.63721-0.57422 0.32471-1.24756 0.50586-0.66992 0.18115-1.32959 0.18115-1.07666 0-2.12597-0.44775-0.19824-0.08545-0.31788-0.11963-0.11621-0.03418-0.28711-0.04785-0.23584-0.01367-0.45458 0.02734-0.21533 0.04102-1.04249 0.28027-1.0083 0.29395-1.01513 0.28711-0.00684-0.00684 0.30078-0.95703 0.30762-0.95361 0.32129-1.10742 0.07178-0.44775-0.14014-0.9126l-0.14014-0.34863q-0.38965-0.96729-0.3623-2.03711 0.02734-1.06982 0.46143-2.02344 0.44775-0.99463 1.25097-1.72265 0.80664-0.72803 1.82178-1.0835 1.01514-0.35547 2.10889-0.27344z"
                      fill="#D0D2D7"
                     />
                  </svg>
                  <div
                    data-pencil-name="Texto Contactar"
                    className="text-[10px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Contactar al gimnasio
                  </div>
                </div>
                <svg
                  data-pencil-name="Flecha contactar"
                  viewBox="0 0 13.99993896484375 14"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-border w-[17px] shrink-0 h-[17px]"
                >
                  <path
                    d="M6.90088 2.35156q-0.18115 0.02734-0.32129 0.16748-0.11279 0.11279-0.14697 0.28028-0.03418 0.16748 0.02051 0.32129 0.02734 0.08545 0.25976 0.3247 0.23242 0.23584 1.36377 1.37061 1.58252 1.58252 1.58252 1.59619 0 0.01367-3.45557 0.01367l-3.44531 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.53321 0.03418l3.01123 0q3.42822 0 3.42822 0.01367 0 0.01367-1.58252 1.59619-1.13135 1.13477-1.36377 1.37402-0.23242 0.23584-0.25976 0.3213-0.05469 0.15381-0.02051 0.32128 0.03418 0.16748 0.14697 0.28028 0.18115 0.18115 0.42041 0.18115l0.04102 0q0.11279 0 0.19824-0.05469 0.14014-0.09912 0.51611-0.46484l1.68164-1.67822q2.1123-2.10205 2.15332-2.18409 0.07178-0.12646 0.07178-0.28027 0-0.15381-0.07178-0.28027-0.04102-0.08203-2.1499-2.18067-2.10547-2.10205-2.17725-2.13623-0.06836-0.0376-0.23584-0.06494-0.04102 0-0.12646 0.01367z"
                    fill="#777C86"
                   />
                </svg>
              </div>
            </div>
          </div>
        </div>
  )
}
