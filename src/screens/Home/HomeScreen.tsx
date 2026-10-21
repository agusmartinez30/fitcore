import { useNavigate } from 'react-router'
import { ROUTES } from '../../routes'
import { BottomNav } from '../../components/BottomNav'

export function Component() {
  const navigate = useNavigate()

  return (
    <div
          data-pencil-name="FITCORE — Inicio"
          className="box-border w-[390px] h-fit flex flex-col gap-0 justify-start items-start bg-[#2A2D34] overflow-hidden"
        >
          <div
            data-pencil-name="Contenido principal"
            className="box-border w-full [flex:1_1_0] flex flex-col gap-[24px] p-[12px_20px_20px_20px] justify-start items-start"
          >
            <div
              data-pencil-name="Bienvenida"
              className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
            >
              <div
                data-pencil-name="Mensaje de bienvenida"
                className="box-border w-[265px] shrink-0 h-fit flex flex-col gap-[7px] justify-start items-start"
              >
                <div
                  data-pencil-name="Fecha actual"
                  className="text-[12px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-semibold tracking-[0.2px] text-left [white-space:nowrap]"
                >
                  Viernes, 16 de octubre
                </div>
                <div
                  data-pencil-name="Saludo"
                  className="text-[26px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.6px] text-left [white-space:nowrap]"
                >
                  ¡Hola, Martín!
                </div>
              </div>
              <div
                data-pencil-name="Acciones de cabecera"
                className="box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] justify-start items-center"
              >
                <div
                  data-pencil-name="Notificaciones"
                  className="box-border w-[44px] shrink-0 h-[44px] flex flex-row gap-0 justify-center items-center bg-[#2A2D34] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px] relative"
                >
                  <svg
                    data-pencil-name="Campana"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[20px] shrink-0 h-[20px] relative [z-index:0]"
                  >
                    <path
                      d="M6.76074 0.60156q-0.62891 0.02734-1.22363 0.25293-0.59473 0.22217-1.0835 0.62891-0.63232 0.50586-1.03222 1.22705-0.39648 0.72119-0.48194 1.51758-0.01367 0.16748-0.03418 0.70068-0.02051 0.52979-0.0581 0.86817-0.03418 0.33496-0.12988 0.68359-0.09912 0.43408-0.28028 0.78613-0.14014 0.30762-0.29394 0.51953-0.15381 0.2085-0.50586 0.58448-0.22217 0.25293-0.30762 0.38623-0.08203 0.1333-0.12647 0.31445-0.04102 0.14014-0.02734 0.32471 0.01367 0.18115 0.05469 0.30761 0.1709 0.46143 0.60498 0.66993l0.04101 0.02734q0.09912 0.0581 0.28028 0.07178 0.23584 0.01367 1.04931 0.02734l7.5879 0q0.81348-0.01367 1.04931-0.02734 0.18115-0.01367 0.28027-0.07178l0.04102-0.02734q0.43408-0.2085 0.60498-0.66993 0.04102-0.12646 0.05469-0.30761 0.01367-0.18457-0.02735-0.32471-0.04443-0.18115-0.12988-0.32129-0.08203-0.14014-0.3042-0.37939-0.35205-0.37598-0.50586-0.58448-0.15381-0.21191-0.29394-0.51953-0.16748-0.33496-0.2666-0.69726-0.0957-0.36572-0.14014-0.72803-0.04102-0.36572-0.06836-0.9126-0.01367-0.72803-0.08545-1.04932-0.2085-1.08008-0.93652-1.9038-0.72803-0.82715-1.76367-1.1792-0.7417-0.23584-1.54151-0.19483z m0.68701 1.18946q0.46143 0.07178 0.88184 0.28369 0.42041 0.2085 0.7417 0.55713 0.46143 0.46143 0.67334 1.06298 0.0957 0.25293 0.12988 0.49219 0.0376 0.23584 0.05127 0.7417 0.01367 0.58789 0.06836 1.01514 0.05811 0.42725 0.15723 0.84765 0.16748 0.68359 0.46826 1.2168 0.30078 0.5332 0.84766 1.12109l0.19482 0.19483-9.32422 0 0.19482-0.19483q0.54688-0.58789 0.84766-1.12109 0.30078-0.5332 0.46826-1.2168 0.09912-0.42041 0.15381-0.84765 0.05811-0.42725 0.07861-1.01514 0.02051-0.58789 0.06836-0.875 0.05127-0.28711 0.21192-0.63574 0.16064-0.35205 0.46142-0.68701 0.30078-0.33838 0.63575-0.54688 0.60498-0.36572 1.333-0.42041 0.08203-0.01367 0.31104 0 0.23242 0.01367 0.34521 0.02735z m-1.6372 9.89843q-0.22559 0.08545-0.33155 0.28028-0.10254 0.19482-0.04785 0.42041 0.01367 0.08545 0.11963 0.24609 0.10596 0.16065 0.21875 0.27344 0.50244 0.50244 1.23047 0.50244 0.72803 0 1.23047-0.50244 0.11279-0.11279 0.21875-0.27344 0.10596-0.16064 0.11963-0.24609 0.05469-0.19482-0.0376-0.38282-0.08887-0.19141-0.27002-0.29052-0.08545-0.04102-0.25293-0.04102-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.11279 0.04102-0.09912 0.05811-0.18115 0.15723-0.11279 0.15381-0.17774 0.20849-0.06152 0.05469-0.14697 0.09912-0.08203 0.04102-0.23584 0.04102-0.15381 0-0.23926-0.04102-0.08203-0.04443-0.14697-0.09912-0.06152-0.05469-0.17432-0.20849-0.15381-0.19824-0.43408-0.21192-0.14014 0-0.19482 0.01367z"
                      fill="#F5F7F4"
                     />
                  </svg>
                  <div
                    data-pencil-name="Indicador sin leer"
                    className="box-border w-[7px] h-[7px] absolute left-[28px] top-[8px] bg-[#F26430] [outline:2px_solid_#2A2D34] [outline-offset:-1px] rounded-[50%] [z-index:1]"
                  ></div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Tarjeta de membresía"
              className="box-border w-full h-[166px] shrink-0 flex flex-col gap-[16px] p-[20px] justify-start items-start [background-image:linear-gradient(-105.314deg,_#343840_8.802%,_#2A2D34_91.198%)] bg-no-repeat bg-[length:100%_100%] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[24px]"
            >
              <div
                data-pencil-name="Encabezado de membresía"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Título y plan"
                  className="box-border w-fit shrink-0 h-fit flex flex-col gap-[5px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Título de membresía"
                    className="text-[13px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Mi membresía
                  </div>
                  <div
                    data-pencil-name="Nombre del plan"
                    className="text-[22px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
                  >
                    Plan Premium
                  </div>
                </div>
                <div
                  data-pencil-name="Estado activo"
                  className="box-border w-fit shrink-0 h-fit flex flex-row gap-[6px] p-[7px_11px] justify-start items-center bg-[#F264301A] [outline:1px_solid_#F264304D] [outline-offset:-0.5px] rounded-[16px]"
                >
                  <div
                    data-pencil-name="Punto activo"
                    className="box-border w-[7px] shrink-0 h-[7px] bg-[#F26430] rounded-[50%]"
                  ></div>
                  <div
                    data-pencil-name="Etiqueta activa"
                    className="text-[12px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Activa
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Vigencia de membresía"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-end"
              >
                <div
                  data-pencil-name="Fecha de vencimiento"
                  className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Etiqueta vencimiento"
                    className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal tracking-[1px] text-left [white-space:nowrap]"
                  >
                    VENCE
                  </div>
                  <div
                    data-pencil-name="Fecha de vencimiento"
                    className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    28 oct 2026
                  </div>
                </div>
                <div
                  data-pencil-name="Días restantes"
                  className="text-[12px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  12 días restantes
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Sección de actividad semanal"
              className="box-border w-full h-[262px] shrink-0 flex flex-col gap-[14px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado de actividad"
                className="box-border w-full h-[44px] shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Título Tu actividad"
                  className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
                >
                  Tu actividad
                </div>
                <div
                  data-pencil-name="Enlace Ver todo"
                  role="button"
 onClick={() => navigate(ROUTES.activity)}
 className="cursor-pointer box-border w-fit shrink-0 h-[44px] flex flex-row gap-0 p-[0px_2px] justify-start items-center"
                >
                  <div
                    data-pencil-name="Texto Ver todo"
                    className="text-[13px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Ver todo
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Resumen de actividad"
                className="box-border w-full h-[204px] shrink-0 flex flex-col gap-[16px] p-[16px_16px_14px_16px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
              >
                <div
                  data-pencil-name="Estadísticas semanales"
                  className="box-border w-full h-[62px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Estadística 1"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor 3/5"
                      className="text-[21px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      3/5
                    </div>
                    <div
                      data-pencil-name="Etiqueta 1"
                      className="text-[10px]/[12px] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-center [white-space:nowrap]"
                    >
                      Entrenos esta
                      <br />
                      semana
                    </div>
                  </div>
                  <div
                    data-pencil-name="Separador 1"
                    className="box-border w-[1px] shrink-0 h-[36px] bg-[#454A54]"
                  ></div>
                  <div
                    data-pencil-name="Estadística 2"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor 4"
                      className="text-[21px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      4
                    </div>
                    <div
                      data-pencil-name="Etiqueta 2"
                      className="text-[10px]/[12px] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-center [white-space:nowrap]"
                    >
                      Semanas de
                      <br />
                      racha
                    </div>
                  </div>
                  <div
                    data-pencil-name="Separador 2"
                    className="box-border w-[1px] shrink-0 h-[36px] bg-[#454A54]"
                  ></div>
                  <div
                    data-pencil-name="Estadística 3"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor 12"
                      className="text-[21px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      12
                    </div>
                    <div
                      data-pencil-name="Etiqueta 3"
                      className="text-[10px]/[12px] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-center [white-space:nowrap]"
                    >
                      Entrenos del
                      <br />
                      mes
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Seguimiento de siete días"
                  className="box-border w-full h-[96px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Día L"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta L"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      L
                    </div>
                    <div
                      data-pencil-name="Estado L"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#F26430] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                    >
                      <svg
                        data-pencil-name="Completado L"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[17px] shrink-0 h-[17px]"
                      >
                        <path
                          d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                          fill="#2A2D34"
                         />
                      </svg>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Día M"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta M"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      M
                    </div>
                    <div
                      data-pencil-name="Estado M"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#F26430] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                    >
                      <svg
                        data-pencil-name="Completado M"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[17px] shrink-0 h-[17px]"
                      >
                        <path
                          d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                          fill="#2A2D34"
                         />
                      </svg>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Día X"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta X"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      X
                    </div>
                    <div
                      data-pencil-name="Estado X"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#393D47] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                    >
                      <svg
                        data-pencil-name="Día de descanso"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[15px] shrink-0 h-[15px]"
                      >
                        <path
                          d="M6.56592 1.18945q-1.12109 0.08545-2.1294 0.57422-1.38428 0.67334-2.23877 1.9209-0.85449 1.24414-1.0083 2.78223-0.02734 0.22559-0.01367 0.68017 0.01367 0.45459 0.04102 0.68018 0.1709 1.07666 0.67334 1.98926 0.50244 0.90918 1.30224 1.60644 0.56055 0.47851 1.23047 0.81348 0.67334 0.33496 1.3877 0.4751 0.34863 0.07178 0.55029 0.09228 0.20508 0.02051 0.65283 0.02051 0.36572 0 0.50586-0.00684 0.14014-0.00684 0.30762-0.03418 1.9585-0.30762 3.30176-1.66797 0.95361-0.95019 1.37402-2.17041 0.2666-0.79639 0.32129-1.56543 0.02734-0.43408-0.23926-0.69384-0.2666-0.25977-0.64258-0.25977-0.14014 0-0.25293 0.0376-0.11279 0.03418-0.28027 0.12988-0.2085 0.11279-0.2666 0.14014-0.55713 0.23926-1.09033 0.2666-0.85449 0.02734-1.60303-0.40674-0.74854-0.43408-1.12793-1.20312-0.16748-0.32129-0.23926-0.62891-0.06836-0.30762-0.06836-0.68701 0-0.42041 0.08887-0.76221 0.09229-0.34521 0.31787-0.73486 0.08203-0.15381 0.11621-0.25977 0.0376-0.10596 0.0376-0.24609 0-0.14014-0.02734-0.25293-0.05811-0.23584-0.2461-0.41016-0.18799-0.17773-0.42724-0.21875-0.12646-0.01367-0.30762 0z m-0.39307 1.27491q-0.02734 0.05469-0.0957 0.22216-0.42041 1.19287-0.11279 2.38233 0.2666 1.09033 1.07666 1.89013 0.95361 0.96387 2.35156 1.17579 0.19824 0.02734 0.51953 0.02734 0.32129 0 0.5332-0.02734 0.24951-0.04443 0.55713-0.12647 0.31104-0.08545 0.50586-0.16748l0.06836-0.02734 0 0.04101q0.01367 0.04102-0.06494 0.30762-0.0752 0.2666-0.11621 0.42041-0.12646 0.32129-0.33155 0.68701-0.20166 0.3623-0.41015 0.62891-0.58789 0.7417-1.41504 1.18945-0.82373 0.44775-1.75 0.55371-0.92285 0.10596-1.83203-0.17431-1.03564-0.30762-1.82862-1.03565-0.78955-0.72803-1.18261-1.73633-0.30762-0.81348-0.30762-1.70898 0-0.89551 0.32129-1.69531 0.35205-0.89551 1.02881-1.57227 0.68018-0.68018 1.57568-1.0459 0.19482-0.08203 0.48877-0.16406 0.29395-0.08545 0.39307-0.08545 0.04102 0 0.04101 0 0 0-0.01367 0.04102z"
                          fill="#A3A7AF"
                         />
                      </svg>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Día J"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta J"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      J
                    </div>
                    <div
                      data-pencil-name="Estado J"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#F26430] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                    >
                      <svg
                        data-pencil-name="Completado J"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[17px] shrink-0 h-[17px]"
                      >
                        <path
                          d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                          fill="#2A2D34"
                         />
                      </svg>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Día V"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta V"
                      className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      V
                    </div>
                    <div
                      data-pencil-name="Estado V"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#F2643012] [outline:2px_solid_#F26430] [outline-offset:-1px] rounded-[18px]"
                    >
                      <div
                        data-pencil-name="Indicador de hoy"
                        className="box-border w-[8px] shrink-0 h-[8px] bg-[#F26430] rounded-[50%]"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Día S"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta S"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      S
                    </div>
                    <div
                      data-pencil-name="Estado S"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#2E323A] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                    >
                      <div
                        data-pencil-name="Próximo S"
                        className="box-border w-[5px] shrink-0 h-[5px] bg-[#696E78] rounded-[50%]"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Día D"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[7px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Etiqueta D"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      D
                    </div>
                    <div
                      data-pencil-name="Estado D"
                      className="box-border w-[36px] h-[36px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#2E323A] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[18px]"
                    >
                      <div
                        data-pencil-name="Próximo D"
                        className="box-border w-[5px] shrink-0 h-[5px] bg-[#696E78] rounded-[50%]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Sección entrenamiento de hoy"
              className="box-border w-full h-[320px] shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Título entrenamiento de hoy"
                className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
              >
                Entrenamiento de hoy
              </div>
              <div
                data-pencil-name="Entrenamiento Pecho y Tríceps"
                className="box-border w-full h-[282px] shrink-0 bg-[#30343C] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[24px] overflow-hidden relative"
              >
                <div
                  data-pencil-name="Fotografía de entrenamiento"
                  className="box-border w-[350px] h-[282px] absolute left-0 top-0 [z-index:0]"
                  style={{ backgroundImage: "url('/images/e6b9e96d648f.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                ></div>
                <div
                  data-pencil-name="Capa de contraste"
                  className="box-border w-[350px] h-[282px] absolute left-0 top-0 [background-image:linear-gradient(-90deg,_#2A2D34F7_0%,_#2A2D34D9_100%,_#2A2D3470_100%)] bg-no-repeat bg-[length:100%_100%] [z-index:1]"
                ></div>
                <div
                  data-pencil-name="Contenido del entrenamiento"
                  className="box-border w-[314px] h-[246px] absolute left-[18px] top-[18px] flex flex-col gap-[11px] justify-start items-start [z-index:2]"
                >
                  <div
                    data-pencil-name="Categoría de entrenamiento"
                    className="box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] p-[6px_10px] justify-start items-center bg-[#F264301A] [outline:1px_solid_#F2643045] [outline-offset:-0.5px] rounded-[14px]"
                  >
                    <svg
                      data-pencil-name="Icono fuerza"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[14px] shrink-0 h-[14px]"
                    >
                      <path
                        d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                        fill="#F26430"
                       />
                    </svg>
                    <div
                      data-pencil-name="Etiqueta fuerza"
                      className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                    >
                      Fuerza · Tren superior
                    </div>
                  </div>
                  <div
                    data-pencil-name="Nombre Pecho y Tríceps"
                    className="text-[25px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold tracking-[-0.5px] text-left [white-space:nowrap]"
                  >
                    Pecho + Tríceps
                  </div>
                  <div
                    data-pencil-name="Datos del entrenamiento"
                    className="box-border w-fit h-fit shrink-0 flex flex-row gap-[18px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Dato 55 min"
                      className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                    >
                      <svg
                        data-pencil-name="Icono 55 min"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[15px] shrink-0 h-[15px]"
                      >
                        <path
                          d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-0.81348 1.14843q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.83496 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.46435 0q0.18115 0 0.26319-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-1.91748 0 0-3.09326-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z"
                          fill="#A3A7AF"
                         />
                      </svg>
                      <div
                        data-pencil-name="Texto 55 min"
                        className="text-[12px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                      >
                        55 min
                      </div>
                    </div>
                    <div
                      data-pencil-name="Dato 6 ejercicios"
                      className="box-border w-fit shrink-0 h-fit flex flex-row gap-[7px] justify-start items-center"
                    >
                      <svg
                        data-pencil-name="Icono 6 ejercicios"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[15px] shrink-0 h-[15px]"
                      >
                        <path
                          d="M5.15088 2.35156q-0.0957 0.01367-0.16748 0.05127-0.06836 0.03418-1.07666 1.02881l-0.99463 0.99121-0.40674-0.40332q-0.2666-0.2666-0.3623-0.35205-0.11279-0.09912-0.19141-0.12646-0.0752-0.02734-0.21533-0.02735-0.14014 0-0.23926 0.04102-0.19482 0.09912-0.28027 0.31787-0.08203 0.21533-0.01367 0.42383 0.02734 0.07178 0.14013 0.1914 0.11279 0.11963 0.58106 0.58789 0.46826 0.46826 0.58789 0.58106 0.11963 0.11279 0.1914 0.14013 0.2085 0.06836 0.417 0 0.08545-0.02734 0.28027-0.21533 0.19824-0.19141 1.08008-1.08691l0.97754-0.98096q0.25293-0.25293 0.31103-0.34863 0.05469-0.08545 0.05469-0.19824l0-0.02735q0.01367-0.28027-0.19141-0.45459-0.20166-0.17432-0.48193-0.1333z m2.32422 0q-0.18115 0.02734-0.32129 0.18115-0.14014 0.15381-0.15381 0.35206 0 0.14014 0.06152 0.28027 0.06494 0.14014 0.19141 0.22217l0.02734 0.02734q0.06836 0.04443 0.16748 0.05811 0.14014 0.01367 0.60157 0.02734l4.35449-0.01367 0.09912-0.04102q0.2666-0.12646 0.32129-0.42041 0.05469-0.29395-0.15381-0.50586-0.14014-0.14014-0.33496-0.16748-0.09912-0.02734-2.43018-0.02734-2.33105 0-2.43017 0.02734z m-0.09571 4.10156q-0.09912 0.04443-0.1914 0.12989-0.08887 0.08203-0.12647 0.16064-0.03418 0.0752-0.04101 0.11621-0.00684 0.04102-0.00684 0.14014 0 0.15381 0.04102 0.25293 0.11279 0.2085 0.3247 0.29394l0.09571 0.02735 4.94238 0 0.08545-0.04102q0.06836-0.04443 0.15039-0.12646 0.08545-0.08545 0.12647-0.16065 0.04443-0.07861 0.04443-0.24609 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666l-0.08545-0.05469-4.64844 0q-0.33496 0.01367-0.38965 0.02734z m-2.2832 1.73633q-0.11279 0.02734-0.29394 0.19141-0.18115 0.16064-0.89551 0.88867l-0.99463 0.97754-0.40674-0.40674q-0.42041-0.40332-0.48877-0.44775-0.11279-0.05469-0.2666-0.05469-0.15381 0-0.2666 0.05469-0.08203 0.04443-0.16065 0.13672-0.0752 0.08887-0.11963 0.17431-0.06836 0.2085 0 0.41699 0.02734 0.07178 0.13331 0.19141 0.10596 0.11963 0.58105 0.58106 0.65967 0.66992 0.72803 0.71435 0.12646 0.05469 0.27344 0.05469 0.14697 0 0.27343-0.05469 0.06836-0.04443 1.30567-1.28174 1.24072-1.24072 1.28174-1.32275 0.04443-0.08545 0.04443-0.23926 0-0.15381-0.0376-0.23584-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z m2.35156 2.32422q-0.14014 0.04102-0.25976 0.15381-0.11963 0.11279-0.16065 0.25293-0.05469 0.19482 0.02735 0.39307 0.08545 0.19482 0.2666 0.29394 0.07178 0.04102 0.19824 0.04102 0.18115 0.01367 0.71094 0.02734l4.14599-0.01367 0.1128-0.04102q0.2085-0.11279 0.29052-0.32129 0.08545-0.21191 0.00684-0.4204-0.0752-0.21192-0.28369-0.32471l-0.09912-0.04102-2.45069-0.01367q-2.43359 0-2.50537 0.01367z"
                          fill="#A3A7AF"
                         />
                      </svg>
                      <div
                        data-pencil-name="Texto 6 ejercicios"
                        className="text-[12px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-medium text-left [white-space:nowrap]"
                      >
                        6 ejercicios
                      </div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Progreso del entrenamiento"
                    className="box-border w-full h-fit shrink-0 flex flex-col gap-[7px] justify-start items-start"
                  >
                    <div
                      data-pencil-name="Etiqueta de progreso"
                      className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
                    >
                      <div
                        data-pencil-name="Progreso completado"
                        className="text-[11px]/[normal] box-border text-[#edededff] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        0 de 6 completados
                      </div>
                      <div
                        data-pencil-name="Porcentaje de progreso"
                        className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        0%
                      </div>
                    </div>
                    <div
                      data-pencil-name="Barra de progreso"
                      className="box-border w-full h-[5px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54] rounded-[3px]"
                    >
                      <div
                        data-pencil-name="Progreso cero"
                        className="box-border w-[4px] shrink-0 h-[5px] bg-[#F26430] rounded-[3px]"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Botón comenzar entrenamiento"
                    role="button"
 onClick={() => navigate(ROUTES.workoutStart)}
 className="cursor-pointer box-border w-full h-[48px] shrink-0 [box-shadow:0px_6px_16px_#F2643052] flex flex-row gap-[9px] justify-center items-center bg-[#F26430] rounded-[14px]"
                  >
                    <svg
                      data-pencil-name="Icono iniciar"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[18px] shrink-0 h-[18px]"
                    >
                      <path
                        d="M3.75293 1.20313q-0.5332 0.09912-0.91943 0.49218-0.38281 0.38965-0.46827 0.90918-0.02734 0.15381-0.02734 4.39551 0 4.2417 0.02734 4.39551 0.08545 0.51953 0.4751 0.90918 0.5332 0.54687 1.31934 0.51953 0.19482-0.01367 0.34179-0.04785 0.14697-0.0376 0.31446-0.10596 0.12646-0.05811 3.58887-2.07812 3.46582-2.02344 3.63671-2.13624 0.23584-0.15381 0.417-0.38281 0.18457-0.23242 0.27343-0.50586 0.09228-0.27344 0.09229-0.56738 0-0.29395-0.08545-0.57422-0.19482-0.5332-0.65625-0.85449-0.11279-0.08203-3.59912-2.11231-3.48633-2.03027-3.61279-2.10205-0.24951-0.12646-0.5503-0.16748-0.30078-0.04102-0.56738 0.01368z m0.56055 1.18945q0.12305 0.04443 3.62988 2.09521 3.51025 2.05078 3.5581 2.10205 0.04785 0.04785 0.10596 0.15723 0.02734 0.07178 0.04102 0.11963 0.01367 0.04785 0.01367 0.1333 0 0.08545-0.01367 0.1333-0.01367 0.04785-0.04102 0.11963-0.05811 0.10938-0.11621 0.16748-0.05469 0.05469-3.61621 2.12939-3.56152 2.07129-3.66748 2.09864-0.10596 0.02734-0.20508 0.01367-0.32129-0.07178-0.44775-0.33496l-0.04102-0.09912 0-8.45606 0.04102-0.09912q0.09912-0.2085 0.32129-0.29053 0.22559-0.08545 0.4375 0.01026z"
                        fill="#2A2D34"
                       />
                    </svg>
                    <div
                      data-pencil-name="Texto comenzar entrenamiento"
                      className="text-[14px]/[normal] box-border text-[#2A2D34] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      Comenzar entrenamiento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BottomNav active="home" />
        </div>
  )
}
