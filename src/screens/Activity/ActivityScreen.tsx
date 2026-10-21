import { BottomNav } from '../../components/BottomNav'

export function Component() {
  return (
    <div
          data-pencil-name="FITCORE — Actividad"
          className="box-border w-[390px] h-fit flex flex-col gap-0 justify-start items-start bg-[#2A2D34] overflow-hidden"
        >
          <div
            data-pencil-name="Contenido principal"
            className="box-border w-full [flex:1_1_0] flex flex-col gap-[24px] p-[12px_20px_20px_20px] justify-start items-start"
          >
            <div
              data-pencil-name="Cabecera de actividad"
              className="box-border w-full h-[112px] shrink-0 flex flex-row gap-0 justify-between items-center"
            >
              <div
                data-pencil-name="Mensaje de progreso"
                className="box-border w-[272px] shrink-0 h-fit flex flex-col gap-[7px] justify-start items-start"
              >
                <div
                  data-pencil-name="Etiqueta Mi progreso"
                  className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold tracking-[1.1px] text-left [white-space:nowrap]"
                >
                  MI PROGRESO
                </div>
                <div
                  data-pencil-name="Título Tu actividad"
                  className="text-[26px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.5px] text-left [white-space:nowrap]"
                >
                  Tu actividad
                </div>
                <div
                  data-pencil-name="Mensaje Cada esfuerzo suma"
                  className="text-[13px]/[17px] box-border w-full text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                >
                  Cada esfuerzo suma. Mirá cuánto avanzaste.
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Resumen de actividad"
              className="box-border w-full h-[224px] shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado Resumen de actividad"
                className="box-border w-full h-[44px] shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Título Resumen de actividad"
                  className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
                >
                  Resumen de actividad
                </div>
                <div
                  data-pencil-name="Selector Este mes"
                  className="box-border w-fit shrink-0 h-[44px] flex flex-row gap-[5px] p-[0px_2px] justify-start items-center"
                >
                  <div
                    data-pencil-name="Periodo Este mes"
                    className="text-[12px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Este mes
                  </div>
                  <svg
                    data-pencil-name="Desplegar periodo"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[14px] shrink-0 h-[14px]"
                  >
                    <path
                      d="M3.34619 4.68945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.25977 0.04785 0.16748 0 0.25635-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04102-0.25293-0.09912-0.16748-0.28027-0.2666-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04101 0.01367-0.11279 0.04102-0.09912 0.05811-1.66455 1.62695l-1.56885 1.56543-2.82666-2.81299q-0.31104-0.29395-0.42041-0.37939-0.08545-0.05469-0.19824-0.05469l-0.02735 0q-0.14014 0-0.18115 0.01367z"
                      fill="#F26430"
                     />
                  </svg>
                </div>
              </div>
              <div
                data-pencil-name="Métricas principales"
                className="box-border w-full h-[168px] shrink-0 flex flex-row gap-[10px] justify-start items-start"
              >
                <div
                  data-pencil-name="Métrica Entrenamientos"
                  className="box-border [flex:1_1_0] h-[168px] flex flex-col gap-[10px] p-[14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
                >
                  <div
                    data-pencil-name="Icono métrica Entrenamientos"
                    className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#F264301A] rounded-[11px]"
                  >
                    <svg
                      data-pencil-name="Símbolo Entrenamientos"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[17px] shrink-0 h-[17px]"
                    >
                      <path
                        d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Valor Entrenamientos"
                    className="text-[27px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold tracking-[-0.5px] text-left [white-space:nowrap]"
                  >
                    12
                  </div>
                  <div
                    data-pencil-name="Etiqueta Entrenamientos"
                    className="text-[11px]/[13px] box-border w-full text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Entrenamientos
                  </div>
                  <div
                    data-pencil-name="Apoyo Entrenamientos"
                    className="text-[9.5px]/[11px] box-border w-full text-[#A9D875] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    +3 vs. mes anterior
                  </div>
                </div>
                <div
                  data-pencil-name="Métrica Asistencias"
                  className="box-border [flex:1_1_0] h-[168px] flex flex-col gap-[10px] p-[14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
                >
                  <div
                    data-pencil-name="Icono métrica Asistencias"
                    className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#27302B] rounded-[11px]"
                  >
                    <svg
                      data-pencil-name="Símbolo Asistencias"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[17px] shrink-0 h-[17px]"
                    >
                      <path
                        d="M4.57666 0.60156q-0.12305 0.01367-0.24268 0.09912-0.11963 0.08203-0.1914 0.19483-0.04102 0.08545-0.05469 0.20508-0.01367 0.11621-0.01367 0.35546l0 0.29395-1.32959 0.01367q-0.14014 0.01367-0.23926 0.02735-0.50244 0.14014-0.85449 0.50586-0.34863 0.3623-0.44776 0.88183-0.02734 0.0957-0.02734 0.81006l0 7.99463 0.05469 0.15381q0.15723 0.51953 0.56055 0.86133 0.40674 0.3418 0.93994 0.3999 0.15381 0.02734 4.26904 0.02734 4.11523 0 4.26904-0.02734 0.30762-0.02734 0.58789-0.16748 0.32471-0.15381 0.56055-0.44092 0.23926-0.28711 0.35205-0.65283l0.05469-0.15381 0-7.99463q0-0.71436-0.02735-0.81006-0.09912-0.51953-0.45117-0.88183-0.34863-0.36572-0.85107-0.50586-0.09912-0.01367-0.23926-0.02735l-1.32959-0.01367 0-0.29395q0-0.32129-0.03418-0.45459-0.03418-0.1333-0.14697-0.24609-0.14014-0.14014-0.35889-0.16064-0.21533-0.02051-0.37597 0.09228-0.16064 0.10938-0.21875 0.29395-0.02734 0.05469-0.03418 0.1333-0.00684 0.0752-0.00684 0.30078l0 0.33496-3.5 0 0-0.34863q0-0.23926-0.00684-0.30762-0.00684-0.07178-0.03418-0.12646-0.08545-0.21191-0.25293-0.30762-0.16748-0.09912-0.37939-0.05811z m-0.50244 2.67285q0.01367 0.25293 0.02051 0.31788 0.00684 0.06152 0.03418 0.14697 0.05811 0.0957 0.14013 0.18115 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445 0.02734-0.08545 0.03418-0.14014 0.00684-0.05811 0.02051-0.32129l0-0.36572 3.5 0 0 0.36572q0.01367 0.26318 0.02051 0.32129 0.00684 0.05469 0.03418 0.14014 0.12646 0.2666 0.42041 0.31445 0.29395 0.04785 0.50586-0.14697 0.08203-0.08545 0.14013-0.18115 0.02734-0.08545 0.03418-0.14697 0.00684-0.06494 0.02051-0.31788l0-0.34863 1.31592 0 0.08545 0.04102q0.08203 0.04443 0.15722 0.12304 0.07861 0.0752 0.11963 0.16065 0.04443 0.08203 0.05811 0.28027 0.01367 0.19482 0.01367 0.85108l0 0.86816-9.35156 0 0.01367-1.72266q0.01367-0.16748 0.02734-0.20849 0.09912-0.2666 0.35206-0.36572 0.05469-0.01367 0.16748-0.02735l1.18945 0 0 0.34863z m7.58789 5.82422q0 1.89014-0.00684 2.30371-0.00683 0.41357-0.0205 0.45459-0.09912 0.25293-0.35206 0.35205l-0.0957 0.04102-8.37402 0-0.0957-0.04102q-0.15381-0.0581-0.26661-0.19824l-0.02734-0.02734q-0.04443-0.05469-0.05811-0.15381-0.02734-0.14014-0.02734-0.60156l-0.01367-4.80225 9.35156 0-0.01367 2.67285z m-3.01123-1.49707q-0.0957 0.01367-0.16748 0.05127-0.06836 0.03418-1.07666 1.02881l-0.99463 0.99121-0.40674-0.40332q-0.2666-0.2666-0.3623-0.35205-0.11279-0.09912-0.19141-0.12646-0.0752-0.02734-0.21533-0.02735-0.14014 0-0.23926 0.04102-0.19482 0.09912-0.28027 0.31787-0.08203 0.21533-0.01368 0.42383 0.02734 0.07178 0.14014 0.1914 0.11279 0.11963 0.58106 0.58789 0.46826 0.46826 0.58789 0.58106 0.11963 0.11279 0.1914 0.14013 0.2085 0.06836 0.417 0 0.08545-0.02734 0.28027-0.21533 0.19824-0.19141 1.08008-1.08691l0.97754-0.98096q0.25293-0.25293 0.31103-0.34863 0.05469-0.08545 0.05469-0.19824l0-0.02735q0.01367-0.28027-0.19141-0.45459-0.20166-0.17432-0.48193-0.1333z"
                        fill="#AAB5AE"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Valor Asistencias"
                    className="text-[27px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold tracking-[-0.5px] text-left [white-space:nowrap]"
                  >
                    15
                  </div>
                  <div
                    data-pencil-name="Etiqueta Asistencias"
                    className="text-[11px]/[13px] box-border w-full text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Asistencias
                  </div>
                  <div
                    data-pencil-name="Apoyo Asistencias"
                    className="text-[9.5px]/[11px] box-border w-full text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Este mes
                  </div>
                </div>
                <div
                  data-pencil-name="Métrica Semanas de racha"
                  className="box-border [flex:1_1_0] h-[168px] flex flex-col gap-[10px] p-[14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
                >
                  <div
                    data-pencil-name="Icono métrica Semanas de racha"
                    className="box-border w-[34px] h-[34px] shrink-0 flex flex-row gap-0 justify-center items-center bg-[#27302B] rounded-[11px]"
                  >
                    <svg
                      data-pencil-name="Símbolo Semanas de racha"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[17px] shrink-0 h-[17px]"
                    >
                      <path
                        d="M6.84619 1.18945q-0.23926 0.07178-0.78271 0.61524-0.51953 0.5332-0.78614 1.05273-0.2666 0.51611-0.32129 1.09033-0.01367 0.21191 0.02735 0.5127 0.04102 0.30078 0.1333 0.56055 0.09229 0.25635 0.33496 0.77588 0.24609 0.51611 0.30078 0.70068 0.05811 0.18115 0.07178 0.46142 0 0.18115-0.00684 0.23926-0.00684 0.05469-0.03418 0.10938-0.12646 0.29395-0.37939 0.44092-0.25293 0.14697-0.54688 0.11962-0.29395-0.02734-0.50244-0.23925-0.12646-0.12646-0.18457-0.24952-0.05469-0.12646-0.08203-0.34179-0.02734-0.21875-0.09912-0.34522-0.06836-0.12646-0.23584-0.21191-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.14014 0.07178-0.28027 0.2666-0.42041 0.57422-0.55713 1.30225-0.1709 0.86816 0.06152 1.81494 0.23242 0.94336 0.80322 1.69873 0.57422 0.75537 1.40137 1.23389 0.82715 0.4751 1.79102 0.58789 0.18457 0.02734 0.5332 0.02734 0.34863 0 0.51953-0.02734 1.04932-0.12647 1.92432-0.65625 0.875-0.5332 1.44922-1.40137 0.51611-0.77246 0.69043-1.69531 0.17773-0.92285-0.02051-1.80469-0.10938-0.43408-0.3418-0.88867-0.23242-0.45801-0.54004-0.86133-0.2085-0.2666-0.40674-0.45459-0.19482-0.19141-0.58789-0.54004-0.54346-0.49219-0.91601-0.96045-0.36914-0.46826-0.66309-1.05615-0.33838-0.67334-0.50586-1.34326-0.06836-0.2666-0.18115-0.3794-0.15381-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z m-0.05469 1.79102q0.14014 0.37939 0.33496 0.74512 0.34863 0.65625 0.76905 1.18261 0.42041 0.52295 1.03564 1.06299 0.61523 0.54004 0.95703 1.0083 0.34521 0.46826 0.49903 0.9878 0.21191 0.7417 0.0205 1.56201-0.18799 0.81689-0.72119 1.4458-0.48877 0.60156-1.17578 0.92627-0.88184 0.43408-1.86963 0.32812-0.98438-0.10596-1.78418-0.70752-0.28027-0.22559-0.55371-0.54687-0.27002-0.32129-0.46142-0.72803-0.18799-0.40674-0.27344-0.79639-0.0957-0.54688-0.05469-0.90918l0.01367-0.08545 0.1128 0.09913q0.37939 0.32129 0.86132 0.43408 0.48193 0.10938 0.95704-0.01367 0.68701-0.1709 1.11425-0.72803 0.42725-0.56055 0.42725-1.26123 0-0.50586-0.2085-1.04932-0.05811-0.15381-0.25293-0.58789-0.2666-0.54688-0.33837-0.75537-0.06836-0.21191-0.06836-0.49219 0-0.22217 0.03418-0.34179 0.0376-0.11963 0.11962-0.30079 0.08545-0.18457 0.16065-0.30078 0.07861-0.11963 0.16748-0.23242 0.09229-0.11279 0.10596-0.09912 0.01367 0.01367 0.07177 0.15381z"
                        fill="#AAB5AE"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Valor Semanas de racha"
                    className="text-[27px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold tracking-[-0.5px] text-left [white-space:nowrap]"
                  >
                    4
                  </div>
                  <div
                    data-pencil-name="Etiqueta Semanas de racha"
                    className="text-[11px]/[13px] box-border w-full text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Semanas de racha
                  </div>
                  <div
                    data-pencil-name="Apoyo Semanas de racha"
                    className="text-[9.5px]/[11px] box-border w-full text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    ¡Seguí así!
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Constancia semanal"
              className="box-border w-full h-[330px] shrink-0 flex flex-col gap-[14px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado Constancia semanal"
                className="box-border w-fit h-fit shrink-0 flex flex-col gap-[4px] justify-start items-start"
              >
                <div
                  data-pencil-name="Título Constancia semanal"
                  className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
                >
                  Constancia semanal
                </div>
                <div
                  data-pencil-name="Subtítulo últimas semanas"
                  className="text-[12px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Tu progreso durante las últimas semanas
                </div>
              </div>
              <div
                data-pencil-name="Gráfico de constancia"
                className="box-border w-full h-[270px] shrink-0 flex flex-col gap-[13px] p-[16px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Resumen mensual del gráfico"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Total mensual"
                    className="box-border w-fit shrink-0 h-fit flex flex-col gap-[2px] justify-start items-start"
                  >
                    <div
                      data-pencil-name="Valor doce entrenamientos"
                      className="text-[18px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      12 entrenamientos
                    </div>
                    <div
                      data-pencil-name="Etiqueta este mes"
                      className="text-[10.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      este mes
                    </div>
                  </div>
                  <div
                    data-pencil-name="Meta semanal"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[5px] p-[6px_9px] justify-start items-center bg-[#F2643012] rounded-[12px]"
                  >
                    <svg
                      data-pencil-name="Icono objetivo"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[13px] shrink-0 h-[13px]"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-1.16211 1.16211q-0.57422 0.07178-1.11426 0.30419-0.54004 0.229-0.98779 0.6084-0.22217 0.18115-0.46143 0.45459-0.23926 0.27002-0.3999 0.51612-0.16064 0.24609-0.30078 0.5913-0.14014 0.3418-0.2085 0.64942-0.09912 0.43408-0.09912 0.92285 0 0.48877 0.09912 0.92285 0.22217 0.92627 0.79639 1.64063 0.12646 0.15381 0.34863 0.37256 0.22559 0.21533 0.3794 0.3247 0.78613 0.58789 1.8081 0.77246 0.19482 0.04102 0.64258 0.04102 0.44775 0 0.64258-0.04102 1.02197-0.18457 1.8081-0.77246 0.15381-0.10938 0.42725-0.38281 0.27344-0.27344 0.38281-0.42725 0.58789-0.78613 0.77246-1.8081 0.04102-0.18115 0.04102-0.64258 0-0.46143-0.04102-0.64258-0.22559-1.28857-1.09375-2.18408-0.3623-0.37939-0.75537-0.62207-0.39307-0.24609-0.88183-0.41357-0.40674-0.14014-0.88184-0.18799-0.4751-0.05127-0.92285 0.00341z m0.99121 1.17578q0.82715 0.14014 1.45605 0.70752 0.63232 0.56738 0.86817 1.39453 0.09912 0.34863 0.09912 0.76904 0 0.42041-0.11279 0.76904-0.2085 0.77246-0.76905 1.31934-0.56055 0.54346-1.31591 0.73828-0.33496 0.08545-0.71436 0.08545-0.37939 0-0.71436-0.08545-0.84082-0.2085-1.42871-0.85107-0.58789-0.646-0.72802-1.48682-0.04102-0.22217-0.04102-0.48877 0-0.2666 0.04102-0.48877 0.07178-0.44775 0.29394-0.875 0.22559-0.42725 0.54688-0.73486 0.51953-0.47852 1.16894-0.68018 0.65283-0.20166 1.3501-0.09228z m-0.76904 1.14843q-0.3623 0.05811-0.69385 0.2837-0.32813 0.22217-0.52295 0.52978-0.2666 0.46143-0.24609 0.97412 0.02051 0.50928 0.31445 0.93652 0.29395 0.42725 0.78613 0.62208 0.43408 0.16748 0.89551 0.10595 0.46143-0.06494 0.82373-0.35205 0.36572-0.28711 0.54688-0.71777 0.12646-0.32471 0.12646-0.65967 0-0.33496-0.12646-0.64258-0.18115-0.43408-0.54004-0.72119-0.35547-0.28711-0.8169-0.35889-0.28027-0.04102-0.54687 0z m0.5332 1.20313q0.18115 0.08545 0.2666 0.2666 0.02734 0.05811 0.04102 0.09912 0.01367 0.04102 0.01367 0.15381 0 0.11279-0.01367 0.15381-0.01367 0.04102-0.04102 0.09912-0.09912 0.18115-0.2666 0.28027-0.08545 0.04102-0.25293 0.04102-0.16748 0-0.25293-0.04102-0.16748-0.09912-0.2666-0.28027-0.02734-0.05811-0.04102-0.09912-0.01367-0.04102-0.01367-0.15381 0-0.11279 0.01367-0.15381 0.01367-0.04102 0.04102-0.09912 0.11279-0.22217 0.36572-0.30762 0.04102-0.01367 0.18115-0.00683 0.14014 0.00684 0.22559 0.04785z"
                        fill="#F26430"
                       />
                    </svg>
                    <div
                      data-pencil-name="Texto meta cinco"
                      className="text-[10px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                    >
                      Meta 5/sem
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Barras semanales"
                  className="box-border w-full h-[145px] shrink-0 flex flex-row gap-[16px] justify-start items-end"
                >
                  <div
                    data-pencil-name="Barra Sem 1"
                    className="box-border [flex:1_1_0] h-[145px] flex flex-col gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor Sem 1"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      3
                    </div>
                    <div
                      data-pencil-name="Pista Sem 1"
                      className="box-border w-[34px] h-[100px] shrink-0 flex flex-col gap-0 justify-end items-start bg-[#303934] rounded-[17px] overflow-hidden"
                    >
                      <div
                        data-pencil-name="Relleno Sem 1"
                        className="box-border w-full h-[66px] shrink-0 [background-image:linear-gradient(0deg,_#D1FF92_0%,_#F26430_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[17px]"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Etiqueta Sem 1"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Sem 1
                    </div>
                  </div>
                  <div
                    data-pencil-name="Barra Sem 2"
                    className="box-border [flex:1_1_0] h-[145px] flex flex-col gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor Sem 2"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      4
                    </div>
                    <div
                      data-pencil-name="Pista Sem 2"
                      className="box-border w-[34px] h-[100px] shrink-0 flex flex-col gap-0 justify-end items-start bg-[#303934] rounded-[17px] overflow-hidden"
                    >
                      <div
                        data-pencil-name="Relleno Sem 2"
                        className="box-border w-full h-[88px] shrink-0 [background-image:linear-gradient(0deg,_#D1FF92_0%,_#F26430_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[17px]"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Etiqueta Sem 2"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Sem 2
                    </div>
                  </div>
                  <div
                    data-pencil-name="Barra Sem 3"
                    className="box-border [flex:1_1_0] h-[145px] flex flex-col gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor Sem 3"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      2
                    </div>
                    <div
                      data-pencil-name="Pista Sem 3"
                      className="box-border w-[34px] h-[100px] shrink-0 flex flex-col gap-0 justify-end items-start bg-[#303934] rounded-[17px] overflow-hidden"
                    >
                      <div
                        data-pencil-name="Relleno Sem 3"
                        className="box-border w-full h-[44px] shrink-0 [background-image:linear-gradient(0deg,_#D1FF92_0%,_#F26430_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[17px]"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Etiqueta Sem 3"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Sem 3
                    </div>
                  </div>
                  <div
                    data-pencil-name="Barra Sem 4"
                    className="box-border [flex:1_1_0] h-[145px] flex flex-col gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Valor Sem 4"
                      className="text-[11px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      3
                    </div>
                    <div
                      data-pencil-name="Pista Sem 4"
                      className="box-border w-[34px] h-[100px] shrink-0 flex flex-col gap-0 justify-end items-start bg-[#303934] rounded-[17px] overflow-hidden"
                    >
                      <div
                        data-pencil-name="Relleno Sem 4"
                        className="box-border w-full h-[66px] shrink-0 [background-image:linear-gradient(0deg,_#D1FF92_0%,_#F26430_100%)] bg-no-repeat bg-[length:100%_100%] rounded-[17px]"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Etiqueta Sem 4"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Sem 4
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Insight motivacional"
                  className="box-border w-full h-[36px] shrink-0 flex flex-row gap-[8px] p-[0px_10px] justify-start items-center bg-[#2E323A] rounded-[12px]"
                >
                  <svg
                    data-pencil-name="Icono Buen ritmo"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[15px] shrink-0 h-[15px]"
                  >
                    <path
                      d="M9.19775 3.51367q-0.14014 0.04102-0.25976 0.15381-0.11963 0.11279-0.16065 0.25293-0.05469 0.19482 0.02735 0.39307 0.08545 0.19482 0.25293 0.29394 0.09912 0.04102 0.30761 0.05469 0.21191 0.01367 1.00831 0.01367l1.04931 0-3.54101 3.54102-1.30225-1.28516q-1.28857-1.28857-1.38086-1.32959-0.08887-0.04443-0.21533-0.05127-0.12646-0.00684-0.21875 0.03076-0.08887 0.03418-0.37598 0.30762-0.28711 0.27002-1.72949 1.7124-1.97217 1.97559-2.0166 2.04395-0.08203 0.19482-0.04785 0.37939 0.03418 0.18115 0.16064 0.29395 0.15381 0.15381 0.36231 0.17431 0.21191 0.02051 0.37939-0.09228 0.07178-0.05469 1.76367-1.75l1.69531-1.70557 2.35157 2.33789q0.25293 0.23584 0.35205 0.29395 0.06836 0.04102 0.18115 0.04101l0.08203 0q0.09912 0 0.19824-0.05468 0.12646-0.08545 0.4751-0.43409l3.65381-3.64013 0.01367 2.23877 0.04102 0.09912q0.04443 0.08203 0.11279 0.16064 0.07178 0.0752 0.14014 0.1128 0.07178 0.03418 0.16748 0.04785 0.23926 0.04102 0.43408-0.09229 0.19824-0.1333 0.25293-0.36914 0.01367-0.11279 0-1.91748l0-1.82178-0.04102-0.09912q-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-1.86279-0.01367q-1.85937 0-1.93116 0.01367z"
                      fill="#F26430"
                     />
                  </svg>
                  <div
                    data-pencil-name="Texto Buen ritmo"
                    className="text-[10.5px]/[normal] box-border text-[#CDD4D0] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    ¡Buen ritmo! Estás manteniendo tu constancia.
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Calendario de actividad"
              className="box-border w-full h-[376px] shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado Calendario de actividad"
                className="box-border w-full h-[44px] shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Título Calendario de actividad"
                  className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
                >
                  Calendario de actividad
                </div>
                <div
                  data-pencil-name="Navegación Octubre 2026"
                  className="box-border w-fit shrink-0 h-[44px] flex flex-row gap-[7px] justify-start items-center"
                >
                  <svg
                    data-pencil-name="Mes anterior"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[16px] shrink-0 h-[16px]"
                  >
                    <path
                      d="M8.59619 2.93945q-0.08545 0.02734-0.19482 0.1128-0.14014 0.12646-0.53321 0.51611l-1.28857 1.2749q-1.81836 1.82178-1.86279 1.90723-0.04102 0.08203-0.04102 0.24951 0 0.16748 0.04785 0.25977 0.05127 0.08887 1.8628 1.9038 1.81494 1.81152 1.9038 1.8628 0.09229 0.04785 0.2461 0.04785 0.15381 0 0.23584-0.03418 0.08545-0.0376 0.18115-0.1333 0.09912-0.09912 0.1333-0.18115 0.0376-0.08545 0.0376-0.23926 0-0.15381-0.04443-0.23584-0.04102-0.08545-1.62012-1.66797l-1.58252-1.58252 1.58252-1.58252q1.5791-1.58252 1.62012-1.66455 0.04443-0.08545 0.04443-0.23926 0-0.15381-0.0376-0.23584-0.03418-0.08545-0.11621-0.18457-0.16748-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z"
                      fill="#A3A7AF"
                     />
                  </svg>
                  <div
                    data-pencil-name="Mes Octubre 2026"
                    className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Octubre 2026
                  </div>
                  <svg
                    data-pencil-name="Mes siguiente"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[16px] shrink-0 h-[16px]"
                  >
                    <path
                      d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                      fill="#A3A7AF"
                     />
                  </svg>
                </div>
              </div>
              <div
                data-pencil-name="Calendario Octubre"
                className="box-border w-full h-[320px] shrink-0 flex flex-col gap-[10px] p-[16px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Días de la semana"
                  className="box-border w-full h-[24px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Cabecera L"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera L"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      L
                    </div>
                  </div>
                  <div
                    data-pencil-name="Cabecera M"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera M"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      M
                    </div>
                  </div>
                  <div
                    data-pencil-name="Cabecera X"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera X"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      X
                    </div>
                  </div>
                  <div
                    data-pencil-name="Cabecera J"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera J"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      J
                    </div>
                  </div>
                  <div
                    data-pencil-name="Cabecera V"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera V"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      V
                    </div>
                  </div>
                  <div
                    data-pencil-name="Cabecera S"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera S"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      S
                    </div>
                  </div>
                  <div
                    data-pencil-name="Cabecera D"
                    className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-center items-start"
                  >
                    <div
                      data-pencil-name="Texto cabecera D"
                      className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      D
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Días de Octubre 2026"
                  className="box-border w-full h-[200px] shrink-0 flex flex-col gap-0 justify-start items-start"
                >
                  <div
                    data-pencil-name="Semana calendario 1"
                    className="box-border w-full h-[40px] shrink-0 flex flex-row gap-0 justify-between items-center"
                  >
                    <div
                      data-pencil-name="Vacío 0-0"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    ></div>
                    <div
                      data-pencil-name="Vacío 0-1"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    ></div>
                    <div
                      data-pencil-name="Vacío 0-2"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    ></div>
                    <div
                      data-pencil-name="Octubre 1"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 1"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        1
                      </div>
                      <div
                        data-pencil-name="Indicadores 1"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 1"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 2"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 2"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        2
                      </div>
                      <div
                        data-pencil-name="Indicadores 2"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Asistencia 2"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#00000000] [outline:1px_solid_#8F949E] [outline-offset:-0.5px] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 3"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 3"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        3
                      </div>
                      <div
                        data-pencil-name="Indicadores 3"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 3"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 4"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 4"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        4
                      </div>
                      <div
                        data-pencil-name="Indicadores 4"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Semana calendario 2"
                    className="box-border w-full h-[40px] shrink-0 flex flex-row gap-0 justify-between items-center"
                  >
                    <div
                      data-pencil-name="Octubre 5"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 5"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        5
                      </div>
                      <div
                        data-pencil-name="Indicadores 5"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 5"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 6"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 6"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        6
                      </div>
                      <div
                        data-pencil-name="Indicadores 6"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Asistencia 6"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#00000000] [outline:1px_solid_#8F949E] [outline-offset:-0.5px] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 7"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 7"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        7
                      </div>
                      <div
                        data-pencil-name="Indicadores 7"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 8"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 8"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        8
                      </div>
                      <div
                        data-pencil-name="Indicadores 8"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 8"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 9"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 9"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        9
                      </div>
                      <div
                        data-pencil-name="Indicadores 9"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Asistencia 9"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#00000000] [outline:1px_solid_#8F949E] [outline-offset:-0.5px] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 10"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 10"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        10
                      </div>
                      <div
                        data-pencil-name="Indicadores 10"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 10"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 11"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 11"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        11
                      </div>
                      <div
                        data-pencil-name="Indicadores 11"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Semana calendario 3"
                    className="box-border w-full h-[40px] shrink-0 flex flex-row gap-0 justify-between items-center"
                  >
                    <div
                      data-pencil-name="Octubre 12"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 12"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        12
                      </div>
                      <div
                        data-pencil-name="Indicadores 12"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 12"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 13"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 13"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        13
                      </div>
                      <div
                        data-pencil-name="Indicadores 13"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 13"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 14"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 14"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        14
                      </div>
                      <div
                        data-pencil-name="Indicadores 14"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Asistencia 14"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#00000000] [outline:1px_solid_#8F949E] [outline-offset:-0.5px] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 15"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 15"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        15
                      </div>
                      <div
                        data-pencil-name="Indicadores 15"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      >
                        <div
                          data-pencil-name="Entrenamiento 15"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#F26430] rounded-[50%]"
                        ></div>
                        <div
                          data-pencil-name="Asistencia 15"
                          className="box-border w-[5px] shrink-0 h-[5px] bg-[#00000000] [outline:1px_solid_#8F949E] [outline-offset:-0.5px] rounded-[50%]"
                        ></div>
                      </div>
                    </div>
                    <div
                      data-pencil-name="Octubre 16"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#F264300D] [outline:1.5px_solid_#F26430] [outline-offset:-0.75px] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 16"
                        className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                      >
                        16
                      </div>
                      <div
                        data-pencil-name="Indicadores 16"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 17"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 17"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        17
                      </div>
                      <div
                        data-pencil-name="Indicadores 17"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 18"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 18"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        18
                      </div>
                      <div
                        data-pencil-name="Indicadores 18"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Semana calendario 4"
                    className="box-border w-full h-[40px] shrink-0 flex flex-row gap-0 justify-between items-center"
                  >
                    <div
                      data-pencil-name="Octubre 19"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 19"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        19
                      </div>
                      <div
                        data-pencil-name="Indicadores 19"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 20"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 20"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        20
                      </div>
                      <div
                        data-pencil-name="Indicadores 20"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 21"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 21"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        21
                      </div>
                      <div
                        data-pencil-name="Indicadores 21"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 22"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 22"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        22
                      </div>
                      <div
                        data-pencil-name="Indicadores 22"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 23"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 23"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        23
                      </div>
                      <div
                        data-pencil-name="Indicadores 23"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 24"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 24"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        24
                      </div>
                      <div
                        data-pencil-name="Indicadores 24"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 25"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 25"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        25
                      </div>
                      <div
                        data-pencil-name="Indicadores 25"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                  </div>
                  <div
                    data-pencil-name="Semana calendario 5"
                    className="box-border w-full h-[40px] shrink-0 flex flex-row gap-0 justify-between items-center"
                  >
                    <div
                      data-pencil-name="Octubre 26"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 26"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        26
                      </div>
                      <div
                        data-pencil-name="Indicadores 26"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 27"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 27"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        27
                      </div>
                      <div
                        data-pencil-name="Indicadores 27"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 28"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 28"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        28
                      </div>
                      <div
                        data-pencil-name="Indicadores 28"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 29"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 29"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        29
                      </div>
                      <div
                        data-pencil-name="Indicadores 29"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 30"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 30"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        30
                      </div>
                      <div
                        data-pencil-name="Indicadores 30"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Octubre 31"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    >
                      <div
                        data-pencil-name="Día 31"
                        className="text-[11px]/[normal] box-border text-[#DCE2DE] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        31
                      </div>
                      <div
                        data-pencil-name="Indicadores 31"
                        className="box-border w-[20px] h-[5px] shrink-0 flex flex-row gap-[3px] justify-center items-center"
                      ></div>
                    </div>
                    <div
                      data-pencil-name="Vacío 4-6"
                      className="box-border [flex:1_1_0] h-[36px] flex flex-col gap-[2px] justify-center items-center bg-[#00000000] rounded-[12px]"
                    ></div>
                  </div>
                </div>
                <div
                  data-pencil-name="Leyenda del calendario"
                  className="[box-sizing:content-box] w-[318px] h-[41.5px] shrink-0 flex flex-row gap-[14px] justify-center items-center [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#2D3731] [margin:-0.5px_0px_0px_0px]"
                >
                  <div
                    data-pencil-name="Leyenda Entrenamiento"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Marca entrenamiento"
                      className="box-border w-[6px] shrink-0 h-[6px] bg-[#F26430] rounded-[50%]"
                    ></div>
                    <div
                      data-pencil-name="Texto Entrenamiento"
                      className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Entrenamiento
                    </div>
                  </div>
                  <div
                    data-pencil-name="Leyenda Solo asistencia"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Marca asistencia"
                      className="box-border w-[6px] shrink-0 h-[6px] bg-[#00000000] [outline:1px_solid_#8F949E] [outline-offset:-0.5px] rounded-[50%]"
                    ></div>
                    <div
                      data-pencil-name="Texto Solo asistencia"
                      className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Solo asistencia
                    </div>
                  </div>
                  <div
                    data-pencil-name="Leyenda Hoy"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[5px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Marca hoy"
                      className="box-border w-[11px] shrink-0 h-[11px] flex flex-row gap-0 justify-start items-start [outline:1px_solid_#F26430] [outline-offset:-0.5px] rounded-[4px]"
                    ></div>
                    <div
                      data-pencil-name="Texto Hoy"
                      className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Hoy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Tus logros"
              className="box-border w-full h-[256px] shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Título Tus logros"
                className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
              >
                Tus logros
              </div>
              <div
                data-pencil-name="Logro racha de cuatro semanas"
                className="box-border w-full h-[216px] shrink-0 flex flex-col gap-[11px] p-[18px] justify-start items-start [background-image:linear-gradient(-106.055deg,_#252F29_8.332%,_#30343C_91.668%)] bg-no-repeat bg-[length:100%_100%] [outline:1px_solid_#415044] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Encabezado logro"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Icono logro de racha"
                    className="box-border w-[42px] shrink-0 h-[42px] flex flex-row gap-0 justify-center items-center bg-[#F264301A] [outline:1px_solid_#F2643045] [outline-offset:-0.5px] rounded-[14px]"
                  >
                    <svg
                      data-pencil-name="Llama de racha"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[21px] shrink-0 h-[21px]"
                    >
                      <path
                        d="M6.84619 1.18945q-0.23926 0.07178-0.78271 0.61524-0.51953 0.5332-0.78614 1.05273-0.2666 0.51611-0.32129 1.09033-0.01367 0.21191 0.02735 0.5127 0.04102 0.30078 0.1333 0.56055 0.09229 0.25635 0.33496 0.77588 0.24609 0.51611 0.30078 0.70068 0.05811 0.18115 0.07178 0.46142 0 0.18115-0.00684 0.23926-0.00684 0.05469-0.03418 0.10938-0.12646 0.29395-0.37939 0.44092-0.25293 0.14697-0.54688 0.11962-0.29395-0.02734-0.50244-0.23925-0.12646-0.12646-0.18457-0.24952-0.05469-0.12646-0.08203-0.34179-0.02734-0.21875-0.09912-0.34522-0.06836-0.12646-0.23584-0.21191-0.05811-0.02734-0.09912-0.04102-0.04102-0.01367-0.15381-0.01367-0.11279 0-0.15381 0.01367-0.04102 0.01367-0.09912 0.04102-0.14014 0.07178-0.28027 0.2666-0.42041 0.57422-0.55713 1.30225-0.1709 0.86816 0.06152 1.81494 0.23242 0.94336 0.80322 1.69873 0.57422 0.75537 1.40137 1.23389 0.82715 0.4751 1.79102 0.58789 0.18457 0.02734 0.5332 0.02734 0.34863 0 0.51953-0.02734 1.04932-0.12647 1.92432-0.65625 0.875-0.5332 1.44922-1.40137 0.51611-0.77246 0.69043-1.69531 0.17773-0.92285-0.02051-1.80469-0.10938-0.43408-0.3418-0.88867-0.23242-0.45801-0.54004-0.86133-0.2085-0.2666-0.40674-0.45459-0.19482-0.19141-0.58789-0.54004-0.54346-0.49219-0.91601-0.96045-0.36914-0.46826-0.66309-1.05615-0.33838-0.67334-0.50586-1.34326-0.06836-0.2666-0.18115-0.3794-0.15381-0.15381-0.39307-0.16748-0.14014 0-0.18115 0.01367z m-0.05469 1.79102q0.14014 0.37939 0.33496 0.74512 0.34863 0.65625 0.76905 1.18261 0.42041 0.52295 1.03564 1.06299 0.61523 0.54004 0.95703 1.0083 0.34521 0.46826 0.49903 0.9878 0.21191 0.7417 0.0205 1.56201-0.18799 0.81689-0.72119 1.4458-0.48877 0.60156-1.17578 0.92627-0.88184 0.43408-1.86963 0.32812-0.98438-0.10596-1.78418-0.70752-0.28027-0.22559-0.55371-0.54687-0.27002-0.32129-0.46142-0.72803-0.18799-0.40674-0.27344-0.79639-0.0957-0.54688-0.05469-0.90918l0.01367-0.08545 0.1128 0.09913q0.37939 0.32129 0.86132 0.43408 0.48193 0.10938 0.95704-0.01367 0.68701-0.1709 1.11425-0.72803 0.42725-0.56055 0.42725-1.26123 0-0.50586-0.2085-1.04932-0.05811-0.15381-0.25293-0.58789-0.2666-0.54688-0.33837-0.75537-0.06836-0.21191-0.06836-0.49219 0-0.22217 0.03418-0.34179 0.0376-0.11963 0.11962-0.30079 0.08545-0.18457 0.16065-0.30078 0.07861-0.11963 0.16748-0.23242 0.09229-0.11279 0.10596-0.09912 0.01367 0.01367 0.07177 0.15381z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Valor cuatro semanas"
                    className="box-border w-fit shrink-0 h-fit flex flex-col gap-[1px] justify-start items-end"
                  >
                    <div
                      data-pencil-name="Número cuatro semanas"
                      className="text-[22px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold tracking-[-0.4px] text-left [white-space:nowrap]"
                    >
                      4 semanas
                    </div>
                    <div
                      data-pencil-name="Etiqueta racha actual"
                      className="text-[9.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                    >
                      Racha actual
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Título gran racha"
                  className="text-[17px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  ¡Llevás una gran racha!
                </div>
                <div
                  data-pencil-name="Descripción racha"
                  className="text-[11.5px]/[15px] box-border w-full text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left"
                >
                  Completaste entrenamientos durante 4 semanas consecutivas.
                </div>
                <div
                  data-pencil-name="Indicadores de semanas"
                  className="box-border w-full h-[22px] shrink-0 flex flex-row gap-0 justify-center items-center"
                >
                  <div
                    data-pencil-name="Semana lograda 1"
                    className="box-border w-[20px] shrink-0 h-[20px] flex flex-row gap-0 justify-center items-center bg-[#F26430] rounded-[10px]"
                  >
                    <svg
                      data-pencil-name="Check semana 1"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[11px] shrink-0 h-[11px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#2A2D34"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Conexión semana 1"
                    className="box-border [flex:1_1_0] h-[2px] bg-[#7DA746]"
                  ></div>
                  <div
                    data-pencil-name="Semana lograda 2"
                    className="box-border w-[20px] shrink-0 h-[20px] flex flex-row gap-0 justify-center items-center bg-[#F26430] rounded-[10px]"
                  >
                    <svg
                      data-pencil-name="Check semana 2"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[11px] shrink-0 h-[11px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#2A2D34"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Conexión semana 2"
                    className="box-border [flex:1_1_0] h-[2px] bg-[#7DA746]"
                  ></div>
                  <div
                    data-pencil-name="Semana lograda 3"
                    className="box-border w-[20px] shrink-0 h-[20px] flex flex-row gap-0 justify-center items-center bg-[#F26430] rounded-[10px]"
                  >
                    <svg
                      data-pencil-name="Check semana 3"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[11px] shrink-0 h-[11px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#2A2D34"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Conexión semana 3"
                    className="box-border [flex:1_1_0] h-[2px] bg-[#7DA746]"
                  ></div>
                  <div
                    data-pencil-name="Semana lograda 4"
                    className="box-border w-[20px] shrink-0 h-[20px] flex flex-row gap-0 justify-center items-center bg-[#F26430] rounded-[10px]"
                  >
                    <svg
                      data-pencil-name="Check semana 4"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[11px] shrink-0 h-[11px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#2A2D34"
                       />
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Próximo objetivo"
                  className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Texto próximo objetivo"
                    className="text-[10.5px]/[normal] box-border text-[#CED5D1] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Próximo objetivo: 5 semanas
                  </div>
                  <div
                    data-pencil-name="Progreso objetivo"
                    className="text-[10.5px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                  >
                    4/5
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Historial de entrenamientos"
              className="box-border w-full h-[322px] shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado Historial de entrenamientos"
                className="box-border w-full h-[44px] shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Título Historial de entrenamientos"
                  className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal tracking-[-0.3px] text-left [white-space:nowrap]"
                >
                  Historial de entrenamientos
                </div>
                <div
                  data-pencil-name="Enlace Ver todo historial"
                  className="box-border w-fit shrink-0 h-[44px] flex flex-row gap-0 justify-start items-center"
                >
                  <div
                    data-pencil-name="Texto Ver todo historial"
                    className="text-[12px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                  >
                    Ver todo
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Lista historial de actividad"
                className="box-border w-full h-[266px] shrink-0 flex flex-col gap-0 justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px] overflow-hidden"
              >
                <div
                  data-pencil-name="Historial Piernas + Glúteos"
                  className="box-border w-full h-[88px] shrink-0 flex flex-row gap-[10px] p-[12px_11px] justify-start items-center"
                >
                  <div
                    data-pencil-name="Miniatura Piernas + Glúteos"
                    className="box-border w-[46px] shrink-0 h-[46px] flex flex-row gap-0 justify-center items-center bg-[#28312C] rounded-[13px]"
                  >
                    <svg
                      data-pencil-name="Icono Piernas + Glúteos"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[20px] shrink-0 h-[20px]"
                    >
                      <path
                        d="M6.74707 1.77734q-0.30762 0.07178-0.56055 0.30762-0.18115 0.18457-0.2666 0.3794-0.08203 0.19482-0.08203 0.44775 0 0.25293 0.0752 0.44092 0.07861 0.18799 0.2666 0.37939 0.19141 0.18799 0.37939 0.2666 0.18799 0.0752 0.44092 0.0752 0.25293 0 0.44092-0.0752 0.18799-0.07861 0.37597-0.2666 0.19141-0.19141 0.26661-0.37939 0.07861-0.18799 0.07861-0.44092 0-0.36572-0.18115-0.62891-0.21191-0.30762-0.54004-0.44091-0.32813-0.1333-0.69385-0.06495z m-3.35986 2.32422q-0.08203 0.01367-0.18116 0.07178-0.09912 0.05469-0.14013 0.10937-0.09912 0.11279-0.1333 0.28028-0.03418 0.16748 0.0205 0.30762 0.04443 0.09912 0.11963 0.1914 0.07861 0.08887 0.16748 0.12647 0.09229 0.03418 1.63038 0.55029l1.55517 0.51953 0 1.75-1.75 3.48633 0 0.16748q0 0.18115 0.04102 0.25293 0.09912 0.19482 0.28027 0.28027 0.09912 0.04102 0.25293 0.04102 0.15381 0 0.24951-0.04785 0.09912-0.05127 0.15723-0.10596 0.06836-0.09912 0.22217-0.39307l0.49218-0.95019q0.61523-1.26123 0.62891-1.26123 0.01367 0 0.62891 1.26123l0.49218 0.95019q0.15381 0.29394 0.22217 0.39307 0.05811 0.05469 0.15381 0.10596 0.09912 0.04785 0.25293 0.04785 0.15381 0 0.25293-0.04102 0.18115-0.08545 0.28027-0.28027 0.04102-0.07178 0.04102-0.25293l0-0.16748-1.75-3.48633 0-1.75 1.55517-0.51953q1.53809-0.51611 1.62696-0.55029 0.09229-0.0376 0.16748-0.12647 0.07861-0.09229 0.11279-0.18799 0.0376-0.09912 0.0376-0.23925-0.01367-0.33838-0.32129-0.49219-0.07178-0.02734-0.11279-0.04102-0.04102-0.01367-0.12647-0.01367-0.08203 0-0.35547 0.08545-0.27344 0.08203-1.46289 0.4751l-1.69531 0.57422-1.68164-0.56055q-1.67822-0.56055-1.77051-0.57422-0.08887-0.01367-0.17431 0.01367l0.01367 0z"
                        fill="#AAB5AE"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Datos Piernas + Glúteos"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start"
                  >
                    <div
                      data-pencil-name="Fecha Jueves, 15 de octubre"
                      className="text-[9.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Jueves, 15 de octubre
                    </div>
                    <div
                      data-pencil-name="Nombre Piernas + Glúteos"
                      className="text-[13.5px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Piernas + Glúteos
                    </div>
                    <div
                      data-pencil-name="Meta Piernas + Glúteos"
                      className="text-[10.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      62 min · 6 ejercicios
                    </div>
                  </div>
                  <div
                    data-pencil-name="Estado completado Piernas + Glúteos"
                    className="box-border w-[22px] shrink-0 h-[22px] flex flex-row gap-0 justify-center items-center bg-[#F2643014] rounded-[11px]"
                  >
                    <svg
                      data-pencil-name="Check completado Piernas + Glúteos"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[13px] shrink-0 h-[13px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                  <svg
                    data-pencil-name="Abrir historial Piernas + Glúteos"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[16px] shrink-0 h-[16px]"
                  >
                    <path
                      d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                      fill="#65726A"
                     />
                  </svg>
                </div>
                <div
                  data-pencil-name="Divisor historial actividad 1"
                  className="box-border w-full h-[1px] shrink-0 bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Historial Espalda + Bíceps"
                  className="box-border w-full h-[88px] shrink-0 flex flex-row gap-[10px] p-[12px_11px] justify-start items-center"
                >
                  <div
                    data-pencil-name="Miniatura Espalda + Bíceps"
                    className="box-border w-[46px] shrink-0 h-[46px] flex flex-row gap-0 justify-center items-center bg-[#28312C] rounded-[13px]"
                  >
                    <svg
                      data-pencil-name="Icono Espalda + Bíceps"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[20px] shrink-0 h-[20px]"
                    >
                      <path
                        d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                        fill="#AAB5AE"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Datos Espalda + Bíceps"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start"
                  >
                    <div
                      data-pencil-name="Fecha Martes, 13 de octubre"
                      className="text-[9.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Martes, 13 de octubre
                    </div>
                    <div
                      data-pencil-name="Nombre Espalda + Bíceps"
                      className="text-[13.5px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Espalda + Bíceps
                    </div>
                    <div
                      data-pencil-name="Meta Espalda + Bíceps"
                      className="text-[10.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      48 min · 5 ejercicios
                    </div>
                  </div>
                  <div
                    data-pencil-name="Estado completado Espalda + Bíceps"
                    className="box-border w-[22px] shrink-0 h-[22px] flex flex-row gap-0 justify-center items-center bg-[#F2643014] rounded-[11px]"
                  >
                    <svg
                      data-pencil-name="Check completado Espalda + Bíceps"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[13px] shrink-0 h-[13px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                  <svg
                    data-pencil-name="Abrir historial Espalda + Bíceps"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[16px] shrink-0 h-[16px]"
                  >
                    <path
                      d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                      fill="#65726A"
                     />
                  </svg>
                </div>
                <div
                  data-pencil-name="Divisor historial actividad 2"
                  className="box-border w-full h-[1px] shrink-0 bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Historial Pecho + Tríceps"
                  className="box-border w-full h-[88px] shrink-0 flex flex-row gap-[10px] p-[12px_11px] justify-start items-center"
                >
                  <div
                    data-pencil-name="Miniatura Pecho + Tríceps"
                    className="box-border w-[46px] shrink-0 h-[46px] flex flex-row gap-0 justify-center items-center bg-[#28312C] rounded-[13px]"
                  >
                    <svg
                      data-pencil-name="Icono Pecho + Tríceps"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[20px] shrink-0 h-[20px]"
                    >
                      <path
                        d="M5.13721 0.60156q-0.0957 0.01367-0.18799 0.05811-0.09229 0.04102-0.19824 0.1333-0.10254 0.08887-0.14698 0.17432-0.04102 0.08203-0.7417 2.57373-0.69727 2.4917-0.73486 2.56347-0.03418 0.06836-0.1333 0.16065-0.0957 0.09229-0.16064 0.11279-0.06152 0.02051-0.21534 0.03418l-1.60986 0.01367-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.22559 0.03418l0.76904 0q0.71436 0 0.89551-0.01367 0.18457-0.01367 0.37939-0.08545 0.32129-0.11279 0.60157-0.36914 0.28027-0.25977 0.40674-0.56739 0.04102-0.11279 0.1538-0.49218l0.53321-1.87305q0.33496-1.22021 0.34863-1.22021 0.01367 0 1.40479 4.97998 1.39453 4.97656 1.43554 5.07226 0.07178 0.14014 0.22559 0.25977 0.15381 0.11963 0.32129 0.14697 0.22559 0.02734 0.43408-0.0752 0.21191-0.10596 0.30762-0.3042 0.05811-0.08203 0.74853-2.56005 0.69385-2.47803 0.72803-2.55323 0.0376-0.07861 0.11963-0.16064 0.08545-0.08545 0.18457-0.12988l0.0957-0.04102 1.63721-0.02734q0.12646 0 0.19482-0.03418 0.07178-0.0376 0.15381-0.11963 0.08545-0.08545 0.12647-0.18115 0.04443-0.09912 0.04443-0.22559 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-0.89551 0q-0.62891 0-0.79297 0-0.16064 0-0.27002 0.02734-0.44775 0.09912-0.81347 0.40674-0.09912 0.08545-0.21875 0.23243-0.11621 0.14697-0.17432 0.27343-0.05469 0.12305-0.15381 0.43408-0.0957 0.30762-0.4751 1.65088-0.43408 1.59619-0.44775 1.59619-0.01367 0-1.41504-4.98339-1.39795-4.98682-1.44238-5.07569-0.04102-0.09229-0.1333-0.18115-0.08887-0.09229-0.17432-0.1333-0.19482-0.11279-0.44775-0.07178z"
                        fill="#AAB5AE"
                       />
                    </svg>
                  </div>
                  <div
                    data-pencil-name="Datos Pecho + Tríceps"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[3px] justify-start items-start"
                  >
                    <div
                      data-pencil-name="Fecha Lunes, 12 de octubre"
                      className="text-[9.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Lunes, 12 de octubre
                    </div>
                    <div
                      data-pencil-name="Nombre Pecho + Tríceps"
                      className="text-[13.5px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      Pecho + Tríceps
                    </div>
                    <div
                      data-pencil-name="Meta Pecho + Tríceps"
                      className="text-[10.5px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      55 min · 6 ejercicios
                    </div>
                  </div>
                  <div
                    data-pencil-name="Estado completado Pecho + Tríceps"
                    className="box-border w-[22px] shrink-0 h-[22px] flex flex-row gap-0 justify-center items-center bg-[#F2643014] rounded-[11px]"
                  >
                    <svg
                      data-pencil-name="Check completado Pecho + Tríceps"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[13px] shrink-0 h-[13px]"
                    >
                      <path
                        d="M11.48096 2.95313q-0.07178 0.01367-0.12989 0.0581-0.05469 0.04102-3.07617 3.06592l-3.0249 3.00781-1.28857-1.28857q-1.28857-1.28516-1.38086-1.32618-0.08887-0.04443-0.22217-0.04443-0.1333 0-0.23242 0.0376-0.0957 0.03418-0.18799 0.11279-0.08887 0.0752-0.1333 0.1709-0.02734 0.07178-0.03418 0.11279-0.00684 0.04102-0.00684 0.14014l0 0.04102q-0.01367 0.11279 0.04102 0.19824 0.07178 0.10938 0.36572 0.40332 0.19482 0.21191 0.96729 0.98096l1.49707 1.48339q0.28027 0.2666 0.38964 0.33838 0.07178 0.05469 0.18457 0.04102l0.09571 0.01367q0.07178 0 0.14013-0.02734 0.08545-0.07178 0.32129-0.28711 0.23926-0.21875 0.79981-0.76221l2.2832-2.2832q2.08496-2.09863 2.7002-2.71387 0.61524-0.61865 0.64599-0.68701 0.04102-0.08545 0.04102-0.23926 0-0.09912-0.00684-0.14014-0.00684-0.04102-0.03418-0.11279-0.04443-0.08203-0.13672-0.16406-0.08887-0.08545-0.18115-0.11963-0.08887-0.0376-0.20849-0.0376-0.11963 0-0.18799 0.02734z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                  <svg
                    data-pencil-name="Abrir historial Pecho + Tríceps"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[16px] shrink-0 h-[16px]"
                  >
                    <path
                      d="M5.09619 2.93945q-0.25293 0.08545-0.37939 0.30762-0.04102 0.08545-0.04102 0.25293 0 0.16748 0.04102 0.25293 0.04443 0.08203 1.62353 1.66455l1.58252 1.58252-1.58252 1.58252q-1.5791 1.58252-1.62353 1.66797-0.04102 0.08203-0.04102 0.23584 0 0.15381 0.03418 0.23926 0.0376 0.08203 0.1333 0.18115 0.09912 0.0957 0.18115 0.1333 0.08545 0.03418 0.23926 0.03418 0.15381 0 0.24268-0.04785 0.09229-0.05127 1.90381-1.8628 1.81494-1.81494 1.86279-1.9038 0.05127-0.09229 0.05127-0.25977 0-0.16748-0.04443-0.24951-0.04102-0.08545-1.85938-1.90723l-1.44238-1.42871q-0.33496-0.33496-0.46143-0.41699-0.09912-0.07178-0.19824-0.07178l-0.04102 0q-0.14014 0-0.18115 0.01367z"
                      fill="#65726A"
                     />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <BottomNav active="activity" />
        </div>
  )
}
