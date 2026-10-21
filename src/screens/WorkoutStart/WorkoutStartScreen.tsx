import { useNavigate } from 'react-router'
import { ROUTES } from '../../routes'

export function Component() {
  const navigate = useNavigate()

  return (
    <div
          data-pencil-name="FITCORE — Comenzar entrenamiento"
          className="box-border w-[390px] h-fit flex flex-col gap-0 justify-start items-start bg-[#2A2D34] overflow-hidden"
        >
          <div
            data-pencil-name="Contenido de sesión activa"
            className="box-border w-full [flex:1_1_0] flex flex-col gap-[22px] p-[16px_20px_28px_20px] justify-start items-start"
          >
            <div
              data-pencil-name="Cabecera de entrenamiento activo"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[14px] justify-start items-start"
            >
              <div
                data-pencil-name="Navegación de sesión"
                className="box-border w-full h-[44px] shrink-0 flex flex-row gap-0 justify-between items-center"
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
                  data-pencil-name="Entrenamiento en curso"
                  className="text-[10px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal tracking-[1.25px] text-left [white-space:nowrap]"
                >
                  ENTRENAMIENTO EN CURSO
                </div>
                <div
                  data-pencil-name="Más opciones"
                  className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[20px]"
                >
                  <svg
                    data-pencil-name="Opciones"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[19px] shrink-0 h-[19px]"
                  >
                    <path
                      d="M2.77197 5.85156q-0.2666 0.01367-0.50244 0.18115-0.33838 0.22559-0.45801 0.59815-0.11621 0.36914 0.00684 0.7417 0.12646 0.36914 0.46484 0.6084 0.26318 0.18115 0.62891 0.18115 0.25293 0 0.44092-0.0752 0.18799-0.07861 0.37597-0.2666 0.19141-0.19141 0.26661-0.37939 0.07861-0.18799 0.07861-0.44092 0-0.25293-0.07861-0.44092-0.0752-0.18799-0.25635-0.37256-0.15381-0.15381-0.29395-0.22216-0.30762-0.15381-0.67334-0.1128z m4.10157 0q-0.2085 0.01367-0.37598 0.09912-0.23926 0.11279-0.3999 0.31446-0.16064 0.20166-0.23243 0.44091-0.02734 0.11279-0.02734 0.29395 0 0.18115 0.02734 0.29395 0.08545 0.30762 0.30762 0.5332 0.22559 0.22217 0.5332 0.30762 0.11279 0.02734 0.29395 0.02734 0.18115 0 0.29395-0.02734 0.30762-0.08545 0.52978-0.30762 0.22559-0.22559 0.31104-0.5332 0.02734-0.11279 0.02734-0.29395 0-0.18115-0.02734-0.29395-0.07178-0.23926-0.23243-0.44091-0.16064-0.20166-0.3999-0.31446-0.26318-0.14014-0.6289-0.09912z m4.07421 0q-0.39307 0.02734-0.70068 0.33496-0.16748 0.18457-0.24609 0.37256-0.0752 0.18799-0.0752 0.44092 0 0.25293 0.0752 0.44775 0.07861 0.19482 0.2666 0.3794 0.19141 0.18115 0.37939 0.25976 0.18799 0.0752 0.44092 0.0752 0.36572 0 0.62891-0.18115 0.33838-0.23926 0.46142-0.6084 0.12647-0.37256 0.00684-0.7417-0.11621-0.37256-0.46143-0.60156-0.3418-0.23242-0.77588-0.17774z"
                      fill="#F5F7F4"
                     />
                  </svg>
                </div>
              </div>
              <div
                data-pencil-name="Información del entrenamiento"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-end"
              >
                <div
                  data-pencil-name="Título del entrenamiento"
                  className="box-border w-fit shrink-0 h-fit flex flex-col gap-[5px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Pecho más Tríceps"
                    className="text-[27px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Pecho + Tríceps
                  </div>
                  <div
                    data-pencil-name="Tipo de entrenamiento"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Fuerza · Tren superior · 16 oct 2026
                  </div>
                </div>
                <div
                  data-pencil-name="Sesión activa"
                  className="box-border w-fit shrink-0 h-[30px] flex flex-row gap-[6px] p-[0px_10px] justify-start items-center bg-[#343840] [outline:1px_solid_#F2643077] [outline-offset:-0.5px] rounded-[15px]"
                >
                  <div
                    data-pencil-name="Indicador activo"
                    className="box-border w-[7px] shrink-0 h-[7px] bg-[#F26430] rounded-[50%]"
                  ></div>
                  <div
                    data-pencil-name="Texto Sesión activa"
                    className="text-[10px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                  >
                    Sesión activa
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Resumen de la sesión"
              className="box-border w-full h-[190px] shrink-0 flex flex-col gap-[16px] p-[18px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
            >
              <div
                data-pencil-name="Métricas en vivo"
                className="box-border w-full h-[92px] shrink-0 flex flex-row gap-[8px] justify-start items-start"
              >
                <div
                  data-pencil-name="Tiempo"
                  className="box-border [flex:1_1_0] h-full flex flex-col gap-[5px] justify-center items-center"
                >
                  <svg
                    data-pencil-name="Icono Tiempo"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[17px] h-[17px] shrink-0"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-0.81348 1.14843q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 3.83496 0.04102 0.08545q0.04443 0.06836 0.12646 0.15381 0.08545 0.08203 0.15381 0.12646l0.08545 0.04102 2.46435 0q0.18115 0 0.26319-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-1.91748 0 0-3.09326-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z"
                      fill="#F26430"
                     />
                  </svg>
                  <div
                    data-pencil-name="Valor Tiempo"
                    className="text-[21px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    18:24
                  </div>
                  <div
                    data-pencil-name="Etiqueta Tiempo"
                    className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Tiempo
                  </div>
                </div>
                <div
                  data-pencil-name="Ejercicios"
                  className="box-border [flex:1_1_0] h-full flex flex-col gap-[5px] justify-center items-center"
                >
                  <svg
                    data-pencil-name="Icono Ejercicios"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[17px] h-[17px] shrink-0"
                  >
                    <path
                      d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                      fill="#A3A7AF"
                     />
                  </svg>
                  <div
                    data-pencil-name="Valor Ejercicios"
                    className="text-[21px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    1/6
                  </div>
                  <div
                    data-pencil-name="Etiqueta Ejercicios"
                    className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Ejercicios
                  </div>
                </div>
                <div
                  data-pencil-name="Series"
                  className="box-border [flex:1_1_0] h-full flex flex-col gap-[5px] justify-center items-center"
                >
                  <svg
                    data-pencil-name="Icono Series"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[17px] h-[17px] shrink-0"
                  >
                    <path
                      d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                      fill="#A3A7AF"
                     />
                  </svg>
                  <div
                    data-pencil-name="Valor Series"
                    className="text-[21px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    4/19
                  </div>
                  <div
                    data-pencil-name="Etiqueta Series"
                    className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Series
                  </div>
                </div>
              </div>
              <div
                data-pencil-name="Encabezado progreso"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-start"
              >
                <div
                  data-pencil-name="Progreso del entrenamiento"
                  className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Progreso del entrenamiento
                </div>
                <div
                  data-pencil-name="Porcentaje"
                  className="text-[12px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  21%
                </div>
              </div>
              <div
                data-pencil-name="Barra de progreso"
                className="box-border w-full h-[8px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54] rounded-[4px]"
              >
                <div
                  data-pencil-name="Progreso completado"
                  className="box-border w-[66px] shrink-0 h-full flex flex-row gap-0 justify-start items-start bg-[#F26430] rounded-[4px]"
                ></div>
              </div>
            </div>
            <div
              data-pencil-name="Sección Ejercicio actual"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado Ejercicio actual"
                className="box-border w-full h-fit shrink-0 flex flex-row gap-0 justify-between items-center"
              >
                <div
                  data-pencil-name="Título Ejercicio actual"
                  className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  Ejercicio actual
                </div>
                <div
                  data-pencil-name="Número de ejercicio"
                  className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  02 / 06
                </div>
              </div>
              <div
                data-pencil-name="Press inclinado con mancuernas"
                className="box-border w-full h-[260px] shrink-0 flex flex-col gap-[14px] p-[14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Vista del ejercicio"
                  className="box-border w-full h-[132px] shrink-0 flex flex-row gap-[14px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Fotografía Press inclinado"
                    className="box-border w-[132px] shrink-0 h-full flex flex-row gap-0 justify-start items-start rounded-[16px] overflow-hidden"
                    style={{ backgroundImage: "url('/images/1dfd9b579d6c.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                  ></div>
                  <div
                    data-pencil-name="Información del ejercicio"
                    className="box-border [flex:1_1_0] h-fit flex flex-col gap-[8px] justify-center items-start"
                  >
                    <div
                      data-pencil-name="Nombre Press inclinado"
                      className="text-[17px]/[19px] box-border w-full text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left"
                    >
                      Press inclinado con mancuernas
                    </div>
                    <div
                      data-pencil-name="Músculo objetivo"
                      className="box-border w-fit h-[26px] shrink-0 flex flex-row gap-0 p-[0px_9px] justify-start items-center bg-[#F2643014] rounded-[13px]"
                    >
                      <div
                        data-pencil-name="Pecho superior"
                        className="text-[10px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Pecho superior
                      </div>
                    </div>
                    <div
                      data-pencil-name="Prescripción"
                      className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                    >
                      3 series × 12 repeticiones
                    </div>
                    <div
                      data-pencil-name="Ver técnica"
                      className="box-border w-fit h-fit shrink-0 flex flex-row gap-[6px] justify-start items-center"
                    >
                      <svg
                        data-pencil-name="Play técnica"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[15px] shrink-0 h-[15px]"
                      >
                        <path
                          d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m-1.94824 2.31054q-0.2085 0.01367-0.42041 0.12647-0.14014 0.06836-0.28028 0.20166-0.14014 0.1333-0.19482 0.27344l-0.02735 0.04443q-0.05811 0.10938-0.08545 0.19482-0.01367 0.12646-0.01367 0.46143l0 3.31885q0 0.29395 0.02735 0.3623 0.11279 0.33838 0.37256 0.55713 0.25977 0.21533 0.60156 0.26318 0.3418 0.04785 0.6665-0.11963 0.12305-0.05469 1.57227-0.92968 1.44922-0.875 1.53467-0.93311 0.23926-0.18115 0.3623-0.4751 0.12646-0.29395 0.08545-0.58789-0.07178-0.40674-0.33496-0.68701-0.08545-0.06836-0.35205-0.23584-0.2666-0.16748-1.28858-0.78613-1.53809-0.92285-1.62353-0.96387-0.28027-0.12646-0.61524-0.08545l0.01368 0z m1.6372 2.05762q1.3877 0.82715 1.3877 0.84082 0 0.01367-1.40137 0.85449-1.39795 0.84082-1.49707 0.89551-0.01367 0-0.01367-1.75l0-1.75 1.52441 0.90918z"
                          fill="#D0D2D7"
                         />
                      </svg>
                      <div
                        data-pencil-name="Texto Ver técnica"
                        className="text-[11px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Ver técnica
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-pencil-name="Ejercicio anterior completado"
                  className="box-border w-full h-[48px] shrink-0 flex flex-row gap-0 p-[0px_12px] justify-between items-center bg-[#2A2D34] rounded-[15px]"
                >
                  <div
                    data-pencil-name="Press de banca completado"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[9px] justify-start items-center"
                  >
                    <svg
                      data-pencil-name="Check ejercicio anterior"
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
                    <div
                      data-pencil-name="Texto ejercicio anterior"
                      className="text-[11px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
                    >
                      01 Press de banca
                    </div>
                  </div>
                  <div
                    data-pencil-name="Series anteriores"
                    className="text-[9px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    4 series · completado
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Registrar series"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Encabezado Registrar series"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[4px] justify-start items-start"
              >
                <div
                  data-pencil-name="Título Registrar series"
                  className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                >
                  Registrar series
                </div>
                <div
                  data-pencil-name="Ayuda Registrar series"
                  className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                >
                  Completá cada serie a medida que entrenás.
                </div>
              </div>
              <div
                data-pencil-name="Tabla de series"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] p-[14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Columnas de series"
                  className="box-border w-full h-[24px] shrink-0 flex flex-row gap-0 justify-start items-center"
                >
                  <div
                    data-pencil-name="Columna SERIE"
                    className="text-[9px]/[normal] box-border [flex:1_1_0] text-[#777C86] font-[Geist,system-ui,sans-serif] font-bold tracking-[0.8px] text-left"
                  >
                    SERIE
                  </div>
                  <div
                    data-pencil-name="Columna KG"
                    className="text-[9px]/[normal] box-border w-[72px] shrink-0 text-[#777C86] font-[Geist,system-ui,sans-serif] font-bold tracking-[0.8px] text-center"
                  >
                    KG
                  </div>
                  <div
                    data-pencil-name="Columna REPS"
                    className="text-[9px]/[normal] box-border w-[72px] shrink-0 text-[#777C86] font-[Geist,system-ui,sans-serif] font-bold tracking-[0.8px] text-center"
                  >
                    REPS
                  </div>
                  <div
                    data-pencil-name="Columna ESTADO"
                    className="text-[9px]/[normal] box-border w-[64px] shrink-0 text-[#777C86] font-[Geist,system-ui,sans-serif] font-bold tracking-[0.8px] text-center"
                  >
                    ESTADO
                  </div>
                </div>
                <div
                  data-pencil-name="Serie 1"
                  className="box-border w-full h-[58px] shrink-0 flex flex-row gap-0 p-[0px_10px] justify-start items-center bg-[#F2643010] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[16px]"
                >
                  <div
                    data-pencil-name="Etiqueta Serie 1"
                    className="text-[12px]/[normal] box-border [flex:1_1_0] text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Serie 1
                  </div>
                  <div
                    data-pencil-name="kg Serie 1"
                    className="box-border w-[64px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#24272D] rounded-[12px]"
                  >
                    <div
                      data-pencil-name="Valor Serie 1 0"
                      className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      20
                    </div>
                  </div>
                  <div
                    data-pencil-name="reps Serie 1"
                    className="box-border w-[64px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#24272D] rounded-[12px]"
                  >
                    <div
                      data-pencil-name="Valor Serie 1 1"
                      className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      12
                    </div>
                  </div>
                  <div
                    data-pencil-name="Estado Serie 1"
                    className="box-border w-[44px] shrink-0 h-[44px] flex flex-row gap-0 justify-center items-center"
                  >
                    <svg
                      data-pencil-name="Check Serie 1"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[24px] shrink-0 h-[24px]"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Serie 2"
                  className="box-border w-full h-[58px] shrink-0 flex flex-row gap-0 p-[0px_10px] justify-start items-center bg-[#3B3F48] [outline:1px_solid_#F2643066] [outline-offset:-0.5px] rounded-[16px]"
                >
                  <div
                    data-pencil-name="Etiqueta Serie 2"
                    className="text-[12px]/[normal] box-border [flex:1_1_0] text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Serie 2
                  </div>
                  <div
                    data-pencil-name="kg Serie 2"
                    className="box-border w-[64px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#24272D] rounded-[12px]"
                  >
                    <div
                      data-pencil-name="Valor Serie 2 0"
                      className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      20
                    </div>
                  </div>
                  <div
                    data-pencil-name="reps Serie 2"
                    className="box-border w-[64px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#24272D] rounded-[12px]"
                  >
                    <div
                      data-pencil-name="Valor Serie 2 1"
                      className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      12
                    </div>
                  </div>
                  <div
                    data-pencil-name="Estado Serie 2"
                    className="box-border w-[44px] shrink-0 h-[44px] flex flex-row gap-0 justify-center items-center"
                  >
                    <svg
                      data-pencil-name="Check Serie 2"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[24px] shrink-0 h-[24px]"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z"
                        fill="#F26430"
                       />
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Serie 3"
                  className="box-border w-full h-[58px] shrink-0 flex flex-row gap-0 p-[0px_10px] justify-start items-center bg-[#2A2D34] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[16px]"
                >
                  <div
                    data-pencil-name="Etiqueta Serie 3"
                    className="text-[12px]/[normal] box-border [flex:1_1_0] text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Serie 3
                  </div>
                  <div
                    data-pencil-name="kg Serie 3"
                    className="box-border w-[64px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#24272D] rounded-[12px]"
                  >
                    <div
                      data-pencil-name="Valor Serie 3 0"
                      className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      20
                    </div>
                  </div>
                  <div
                    data-pencil-name="reps Serie 3"
                    className="box-border w-[64px] shrink-0 h-[38px] flex flex-row gap-0 justify-center items-center bg-[#24272D] rounded-[12px]"
                  >
                    <div
                      data-pencil-name="Valor Serie 3 1"
                      className="text-[14px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
                    >
                      12
                    </div>
                  </div>
                  <div
                    data-pencil-name="Estado Serie 3"
                    className="box-border w-[44px] shrink-0 h-[44px] flex flex-row gap-0 justify-center items-center"
                  >
                    <svg
                      data-pencil-name="Check Serie 3"
                      viewBox="0 0 13.99993896484375 14"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      className="box-border w-[24px] shrink-0 h-[24px]"
                    >
                      <path
                        d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z"
                        fill="#777C86"
                       />
                    </svg>
                  </div>
                </div>
                <div
                  data-pencil-name="Agregar serie"
                  className="box-border w-fit h-[44px] shrink-0 flex flex-row gap-[7px] justify-start items-center"
                >
                  <svg
                    data-pencil-name="Más"
                    viewBox="0 0 13.99993896484375 14"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-border w-[16px] shrink-0 h-[16px]"
                  >
                    <path
                      d="M6.90088 2.35156q-0.0957 0.01367-0.17432 0.05127-0.0752 0.03418-0.15381 0.12647-0.0752 0.08887-0.11279 0.16748-0.03418 0.0752-0.03418 0.32812l0 3.40088-3.66748 0-0.08545 0.04102q-0.22217 0.11279-0.30078 0.33838-0.0752 0.22217 0.00684 0.43408 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.16748 0.11963 0.08545 0.03418 0.33838 0.03418l3.40088 0 0 3.40088q0 0.25293 0.03418 0.33838 0.0376 0.08203 0.11963 0.16748 0.08545 0.08203 0.18799 0.1333 0.10596 0.04785 0.23242 0.04785 0.12646 0 0.229-0.04785 0.10596-0.05127 0.18799-0.1333 0.08545-0.08545 0.11963-0.16748 0.0376-0.08545 0.0376-0.33838l0-3.40088 3.40088 0q0.25293 0 0.33496-0.03418 0.08545-0.0376 0.16748-0.11963 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-3.66748 0 0-3.38721q0-0.2666-0.02734-0.32128-0.07178-0.19824-0.25293-0.30079-0.18115-0.10596-0.39307-0.06494z"
                      fill="#A3A7AF"
                     />
                  </svg>
                  <div
                    data-pencil-name="Texto Agregar serie"
                    className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    Agregar serie
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Tiempo de descanso"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Título Tiempo de descanso"
                className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
              >
                Tiempo de descanso
              </div>
              <div
                data-pencil-name="Temporizador activo"
                className="box-border w-full h-[154px] shrink-0 flex flex-row gap-[16px] p-[16px] justify-start items-center bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Progreso de descanso"
                  className="box-border w-[92px] shrink-0 h-[92px] flex flex-row gap-0 justify-center items-center [outline:5px_solid_#F26430] [outline-offset:-2.5px] rounded-[46px]"
                >
                  <div
                    data-pencil-name="Cuenta regresiva"
                    className="text-[20px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                  >
                    01:30
                  </div>
                </div>
                <div
                  data-pencil-name="Controles de descanso"
                  className="box-border [flex:1_1_0] h-fit flex flex-col gap-[10px] justify-start items-start"
                >
                  <div
                    data-pencil-name="Mensaje descanso"
                    className="text-[12px]/[14px] box-border w-full text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left"
                  >
                    Descansá antes de la próxima serie.
                  </div>
                  <div
                    data-pencil-name="Acciones de descanso"
                    className="box-border w-fit h-fit shrink-0 flex flex-row gap-[10px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Omitir descanso"
                      className="box-border w-fit shrink-0 h-[40px] flex flex-row gap-0 p-[0px_12px] justify-start items-center bg-[#2A2D34] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[14px]"
                    >
                      <div
                        data-pencil-name="Texto Omitir descanso"
                        className="text-[10px]/[normal] box-border text-[#D0D2D7] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Omitir descanso
                      </div>
                    </div>
                    <div
                      data-pencil-name="Pausar temporizador"
                      className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#F2643014] rounded-[14px]"
                    >
                      <svg
                        data-pencil-name="Pausa"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[17px] shrink-0 h-[17px]"
                      >
                        <path
                          d="M3.21973 1.20313q-0.28027 0.05811-0.53321 0.30761-0.12305 0.12646-0.19482 0.23242-0.06836 0.10596-0.11279 0.27344l-0.04102 0.12647 0 9.71386 0.04102 0.12647q0.04443 0.16748 0.11279 0.27344 0.07178 0.10596 0.19482 0.23242 0.23926 0.23584 0.53321 0.30761 0.12646 0.02734 1.15527 0.02735 1.02881 0 1.15527-0.02735 0.29395-0.07178 0.53321-0.30761 0.12305-0.12646 0.1914-0.23242 0.07178-0.10596 0.11621-0.27344l0.04102-0.12647 0-9.71386-0.04102-0.12647q-0.04443-0.16748-0.11621-0.27344-0.06836-0.10596-0.1914-0.23242-0.25293-0.24951-0.54688-0.30761-0.12646-0.02734-1.14844-0.02735-1.02197 0-1.14843 0.02735z m5.25-0.00001q-0.28027 0.05811-0.53321 0.30762-0.12305 0.12646-0.19482 0.23242-0.06836 0.10596-0.11279 0.27344l-0.04102 0.12647 0 9.71386 0.04102 0.12647q0.04443 0.16748 0.11279 0.27344 0.07178 0.10596 0.19482 0.23242 0.23926 0.23584 0.53321 0.30761 0.12646 0.02734 1.15527 0.02735 1.02881 0 1.15527-0.02735 0.29395-0.07178 0.53321-0.30761 0.12305-0.12646 0.1914-0.23242 0.07178-0.10596 0.11621-0.27344l0.04102-0.12647 0-9.71386-0.04102-0.12647q-0.04443-0.16748-0.11621-0.27344-0.06836-0.10596-0.1914-0.23242-0.25293-0.24951-0.54688-0.30761-0.12647-0.02734-1.14844-0.02735-1.02197 0-1.14843 0.02735z m-3.21973 5.79688l0 4.67578-1.75 0 0-9.35156 1.75 0 0 4.67578z m5.25 0l0 4.67578-1.75 0 0-9.35156 1.75 0 0 4.67578z"
                          fill="#F26430"
                         />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-pencil-name="Próximos ejercicios"
              className="box-border w-full h-fit shrink-0 flex flex-col gap-[12px] justify-start items-start"
            >
              <div
                data-pencil-name="Título Próximos ejercicios"
                className="text-[16px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-bold text-left [white-space:nowrap]"
              >
                Próximos ejercicios
              </div>
              <div
                data-pencil-name="Lista de próximos ejercicios"
                className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[4px_14px] justify-start items-start bg-[#343840] [outline:1px_solid_#454A54] [outline-offset:-0.5px] rounded-[22px]"
              >
                <div
                  data-pencil-name="Aperturas con mancuernas"
                  className="box-border w-full h-[70px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Aperturas con mancuernas"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Número 03"
                      className="box-border w-[34px] shrink-0 h-[34px] flex flex-row gap-0 justify-center items-center bg-[#2A2D34] rounded-[11px]"
                    >
                      <div
                        data-pencil-name="Texto número 03"
                        className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        03
                      </div>
                    </div>
                    <div
                      data-pencil-name="Icono ejercicio 03"
                      className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#3B3F48] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="Movimiento 03"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M2.78564 2.35156q-0.12646 0.01367-0.23925 0.1128-0.10938 0.09912-0.16748 0.22216l-0.04102 0.08545-0.01367 3.17871q0.01367 0.40674 0.02734 0.54688 0.01367 0.10938 0.04785 0.18799 0.0376 0.0752 0.1128 0.14697 0.07861 0.06836 0.16064 0.11279 0.19824 0.08203 0.3999 0.02735 0.20166-0.05811 0.31446-0.22559l0.01367 0q0.05811-0.08203 0.07178-0.15723 0.01367-0.07861 0.02734-0.33154l0-1.93115 6.15918 6.15918-2.08496 0.02734q-0.15381 0-0.21192 0.02735-0.18115 0.08545-0.28027 0.23925-0.0957 0.15381-0.08203 0.33496 0.01367 0.15381 0.10254 0.28711 0.09229 0.1333 0.20508 0.19141 0.11279 0.05469 0.40674 0.06836 0.29395 0.01367 1.70898 0.01367l1.80469-0.01367 0.08545-0.04102q0.08203-0.04443 0.17773-0.1333 0.09912-0.09229 0.12988-0.17431l0.04102-0.08545 0.01367-1.81836q0-1.40137-0.01367-1.69531-0.01367-0.29395-0.06494-0.40674-0.04785-0.11279-0.18115-0.19483-0.1333-0.08545-0.25635-0.09912-0.19824-0.02734-0.3794 0.08545-0.18115 0.10938-0.25293 0.28027-0.01367 0.06836-0.02734 1.17579l-0.01367 1.104-6.15918-6.15918 1.93115 0q0.25293-0.01367 0.32813-0.02734 0.07861-0.01367 0.16064-0.07178l0-0.01367q0.21191-0.14014 0.24609-0.36914 0.03418-0.23242-0.09912-0.43409-0.1333-0.20508-0.38281-0.23242-0.09912-0.02734-1.86963-0.02734-1.77051 0-1.85596 0.02734z"
                          fill="#A3A7AF"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Aperturas con mancuernas"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Nombre Aperturas con mancuernas"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Aperturas con mancuernas
                      </div>
                      <div
                        data-pencil-name="Detalle Aperturas con mancuernas"
                        className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        3 × 12 · Pecho
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Flecha 03"
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
                <div
                  data-pencil-name="Divisor 03"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Fondos en paralelas"
                  className="box-border w-full h-[70px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Fondos en paralelas"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Número 04"
                      className="box-border w-[34px] shrink-0 h-[34px] flex flex-row gap-0 justify-center items-center bg-[#2A2D34] rounded-[11px]"
                    >
                      <div
                        data-pencil-name="Texto número 04"
                        className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        04
                      </div>
                    </div>
                    <div
                      data-pencil-name="Icono ejercicio 04"
                      className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#3B3F48] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="Movimiento 04"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M6.84619 1.18945q-0.25293 0.08545-0.37939 0.30762l-0.04102 0.08545 0 6.92822-1.28857-1.28515q-1.30225-1.28857-1.37061-1.33301-0.11279-0.05469-0.2666-0.05469-0.15381 0-0.2666 0.05469-0.08203 0.04443-0.16065 0.13672-0.0752 0.08887-0.11279 0.18799-0.03418 0.0957-0.03418 0.22216 0 0.12646 0.05469 0.22559 0.01709 0.05469 0.36572 0.41357 0.34863 0.35547 1.49707 1.50391 1.14844 1.14844 1.50391 1.50049 0.35889 0.34863 0.41357 0.3623 0.09912 0.05469 0.23926 0.05469 0.14014 0 0.23926-0.04102 0.05469-0.02734 0.41015-0.37597 0.35889-0.35205 1.50733-1.50049 1.14844-1.14844 1.49707-1.50391 0.34863-0.35889 0.36572-0.41357 0.05469-0.09912 0.05469-0.22559 0-0.12646-0.0376-0.22216-0.03418-0.09912-0.11279-0.18799-0.0752-0.09229-0.15723-0.13672-0.11279-0.05469-0.2666-0.05469-0.15381 0-0.2666 0.05469-0.06836 0.04443-1.37061 1.33301l-1.28857 1.28515 0-6.92822-0.04102-0.08545q-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m-4.11523 10.51368q-0.23926 0.08545-0.34522 0.3247-0.10254 0.23584-0.00683 0.46143 0.05811 0.0957 0.14013 0.18115 0.08545 0.08203 0.18457 0.12647l0.09571 0.02734 8.40136 0 0.09571-0.02734q0.09912-0.04443 0.18115-0.12647 0.08545-0.08545 0.1333-0.18799 0.05127-0.10596 0.05127-0.23242 0-0.12646-0.04102-0.23926-0.09912-0.19482-0.29394-0.29394l-0.08545-0.04102-4.22803 0q-4.22803 0-4.28271 0.02735z"
                          fill="#A3A7AF"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Fondos en paralelas"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Nombre Fondos en paralelas"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Fondos en paralelas
                      </div>
                      <div
                        data-pencil-name="Detalle Fondos en paralelas"
                        className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        3 × 10 · Pecho / Tríceps
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Flecha 04"
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
                <div
                  data-pencil-name="Divisor 04"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Extensión de tríceps en polea"
                  className="box-border w-full h-[70px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Extensión de tríceps en polea"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Número 05"
                      className="box-border w-[34px] shrink-0 h-[34px] flex flex-row gap-0 justify-center items-center bg-[#2A2D34] rounded-[11px]"
                    >
                      <div
                        data-pencil-name="Texto número 05"
                        className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        05
                      </div>
                    </div>
                    <div
                      data-pencil-name="Icono ejercicio 05"
                      className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#3B3F48] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="Movimiento 05"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M1.59619 1.18945q-0.25293 0.08545-0.37939 0.30762-0.02734 0.05811-0.03418 0.13672-0.00684 0.0752-0.00684 0.39648l0 0.44776-0.12646 0.09912q-0.32129 0.23584-0.43409 0.6289-0.01367 0.06836-0.02734 0.22559l0 1.4834 0.04102 0.16748q0.14014 0.4751 0.45459 0.80664 0.31787 0.32813 0.76562 0.45117 0.08203 0.03076 0.23584 0.05811 0.15381 0.02734 0.22559 0.02734 0.01367 0 0.01367 1.90381 0 1.42871 0.01367 1.82178 0.01367 0.38965 0.05469 0.58789 0.15381 0.81006 0.76221 1.37744 0.61182 0.56738 1.43554 0.69385 0.14014 0.01367 0.3794 0.01367 0.23926 0 0.37939-0.02734 0.71436-0.09912 1.26465-0.55372 0.55371-0.45459 0.80664-1.12793 0.06836-0.2085 0.12646-0.44775 0.01367-0.08203 0.02735-3.58203l0.01367-2.97022q0.01367-0.57422 0.02734-0.65625 0.09912-0.40674 0.40674-0.70752 0.30762-0.30078 0.70069-0.38623 0.11279-0.01367 0.30078-0.0205 0.18799-0.00684 0.30078 0.0205 0.40674 0.07178 0.72119 0.3794 0.31445 0.30762 0.41357 0.70068 0.02734 0.0957 0.02735 0.42041l0 3.72217-0.15381 0.01367q-0.57422 0.04102-1.01514 0.44776-0.44092 0.40674-0.54004 0.99463-0.02734 0.15381-0.02734 0.86816 0 0.71436 0.02734 0.84082 0.04102 0.19482 0.16748 0.39307 0.12646 0.19482 0.29395 0.30761l0.08545 0.05469 0 0.43408q0.01367 0.32129 0.02051 0.39307 0.00684 0.06836 0.04785 0.16064 0.04443 0.08887 0.12646 0.17432 0.21191 0.19482 0.50586 0.14697 0.29395-0.04785 0.42041-0.31445 0.02734-0.08545 0.03418-0.14014 0.00684-0.0581 0.02051-0.32129l0-0.36572 1.17578 0 0 0.36572q0 0.26318 0.00684 0.33496 0.00684 0.06836 0.04101 0.13331 0.0376 0.06152 0.11963 0.14697 0.08545 0.08203 0.16065 0.12646 0.07861 0.04102 0.24609 0.04102 0.16748 0 0.24268-0.04102 0.07861-0.04443 0.16064-0.12646 0.08545-0.08545 0.11963-0.15381 0.0376-0.07178 0.04443-0.14014 0.00684-0.07178 0.00684-0.39306l0.01367-0.44776 0.12646-0.09912q0.30762-0.24951 0.42042-0.6289 0.01367-0.06836 0.02734-0.22559l0-1.4834-0.04102-0.16748q-0.12646-0.46143-0.43408-0.76904-0.21191-0.23926-0.50586-0.38623-0.29395-0.14697-0.58789-0.16065l-0.16748-0.01367 0-2.2251q-0.01367-1.44238-0.02051-1.71582-0.00683-0.27344-0.06494-0.4956l-0.01367-0.03076q-0.14014-0.55713-0.51953-1.00489-0.37598-0.45117-0.90235-0.69385-0.52295-0.24609-1.09716-0.24609-1.06299 0-1.81836 0.71436-0.60156 0.56055-0.78614 1.44238-0.01367 0.08203-0.02734 3.58203l-0.01367 2.97022q-0.01367 0.57422-0.02734 0.65625-0.08545 0.32129-0.31104 0.59472-0.22217 0.27344-0.51611 0.39991-0.25293 0.12646-0.59473 0.12646-0.3418 0-0.62207-0.1333-0.28027-0.1333-0.49902-0.38281-0.21533-0.25293-0.30078-0.56055-0.02734-0.09912-0.02735-0.36572l-0.01367-3.79395 0.11279-0.01367q0.3623-0.02734 0.62891-0.16065 0.2666-0.1333 0.51953-0.37255 0.3623-0.37598 0.46143-0.92286 0.02734-0.15381 0.02734-0.86816 0-0.71436-0.02734-0.84082-0.04102-0.19482-0.16748-0.38965-0.12646-0.19824-0.29395-0.31103l-0.08545-0.05469 0-0.43408q-0.01367-0.32129-0.02051-0.38965-0.00684-0.07178-0.03418-0.15723-0.09912-0.19482-0.29394-0.29394-0.08545-0.04102-0.21875-0.04785-0.1333-0.00684-0.23242 0.03759-0.0957 0.04102-0.18799 0.11963-0.08887 0.0752-0.12647 0.16065-0.03418 0.08203-0.04101 0.14697-0.00684 0.06152-0.02051 0.32471l0 0.36572-1.17578 0 0-0.36572q0-0.26318-0.00684-0.33155-0.00684-0.07178-0.03418-0.12988-0.09912-0.18115-0.28027-0.2666-0.08545-0.04102-0.22559-0.04785-0.14014-0.00684-0.18115 0.00683z m2.47803 2.95313q0 0.44775-0.00684 0.55371-0.00684 0.10596-0.03759 0.19141-0.02734 0.08203-0.1128 0.17431-0.08203 0.08887-0.16406 0.1333l-0.09912 0.04102-0.70069 0.01367q-0.68359 0-0.76904-0.01367-0.2666-0.07178-0.39306-0.34863-0.02734-0.05811-0.02735-0.16065 0-0.10596-0.01367-0.56738l0-0.65967 2.32422 0 0 0.64258z m7.82715 4.66211q0.19482 0.09912 0.29394 0.29394l0.04102 0.09912 0.01367 1.30225-2.32422 0 0-0.64258q0-0.44775 0.00684-0.55371 0.00684-0.10596 0.02734-0.18115 0.02051-0.07861 0.08887-0.16065 0.07178-0.08545 0.15722-0.1333 0.08545-0.05127 0.21534-0.06494 0.1333-0.01367 0.69384-0.01367l0.68702 0.01367 0.09912 0.04102z"
                          fill="#A3A7AF"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Extensión de tríceps en polea"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Nombre Extensión de tríceps en polea"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Extensión de tríceps en polea
                      </div>
                      <div
                        data-pencil-name="Detalle Extensión de tríceps en polea"
                        className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        3 × 12 · Tríceps
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Flecha 05"
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
                <div
                  data-pencil-name="Divisor 05"
                  className="box-border w-full h-[1px] shrink-0 flex flex-row gap-0 justify-start items-start bg-[#454A54]"
                ></div>
                <div
                  data-pencil-name="Press francés"
                  className="box-border w-full h-[70px] shrink-0 flex flex-row gap-0 justify-between items-center"
                >
                  <div
                    data-pencil-name="Contenido Press francés"
                    className="box-border w-fit shrink-0 h-fit flex flex-row gap-[11px] justify-start items-center"
                  >
                    <div
                      data-pencil-name="Número 06"
                      className="box-border w-[34px] shrink-0 h-[34px] flex flex-row gap-0 justify-center items-center bg-[#2A2D34] rounded-[11px]"
                    >
                      <div
                        data-pencil-name="Texto número 06"
                        className="text-[11px]/[normal] box-border text-[#F26430] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        06
                      </div>
                    </div>
                    <div
                      data-pencil-name="Icono ejercicio 06"
                      className="box-border w-[40px] shrink-0 h-[40px] flex flex-row gap-0 justify-center items-center bg-[#3B3F48] rounded-[12px]"
                    >
                      <svg
                        data-pencil-name="Movimiento 06"
                        viewBox="0 0 13.99993896484375 14"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-border w-[18px] shrink-0 h-[18px]"
                      >
                        <path
                          d="M9.81299 0.56055q-0.40332 0.05469-0.74854 0.29394-0.3418 0.23584-0.52295 0.57422l-0.0581 0.11279q-0.01367 0-0.11279-0.07177-0.51611-0.34863-1.16211-0.29395-0.43408 0.02734-0.81348 0.28711-0.37598 0.25977-0.58447 0.6665-0.21191 0.43408-0.1709 0.92969 0.04443 0.49561 0.33838 0.88867 0.06836 0.09912 0.82715 0.86817l0.76904 0.76904-1.98926 1.98926-0.76904-0.76904q-0.61523-0.61865-0.80664-0.7793-0.18799-0.16064-0.39307-0.24268-0.20166-0.08545-0.32812-0.11279-0.12305-0.02734-0.37598-0.02734-0.28027 0-0.44775 0.04101-0.16748 0.04102-0.3794 0.15381-0.38965 0.2085-0.62891 0.56738-0.23926 0.35547-0.28027 0.80323-0.04102 0.29395 0.04785 0.61865 0.09229 0.32129 0.25977 0.56055 0.05811 0.08203 0.0581 0.08203l-0.09912 0.05468q-0.5332 0.31104-0.75537 0.8545-0.18457 0.42041-0.13672 0.875 0.05127 0.45459 0.31787 0.82031 0.08545 0.11279 0.33497 0.37939l0.25292 0.24952-0.23925 0.25292q-0.19482 0.2085-0.2666 0.30762-0.06836 0.09912-0.06836 0.23926-0.02734 0.2666 0.16064 0.44775 0.18799 0.18115 0.45459 0.16748 0.14014 0 0.23926-0.06836 0.09912-0.07178 0.30762-0.2666l0.25293-0.23925 0.24951 0.25293q0.2666 0.24951 0.37939 0.33496 0.50586 0.36572 1.13477 0.3247 0.62891-0.04443 1.07666-0.47851 0.21191-0.19482 0.32129-0.40674l0.0581-0.11279q0.01367 0 0.11279 0.07177 0.3623 0.25293 0.82374 0.29395 0.23926 0.02734 0.48876-0.02051 0.25293-0.05127 0.47852-0.16064 0.4751-0.23926 0.72803-0.68702 0.25293-0.44775 0.22217-0.96386-0.02734-0.51953-0.34864-0.95362-0.06836-0.08545-0.82715-0.85449l-0.76904-0.76904 1.98926-1.98926 0.76904 0.76904q0.76904 0.75879 0.86817 0.82715 0.33496 0.25293 0.7622 0.32471 0.42725 0.06836 0.82032-0.05811 0.50244-0.18115 0.81689-0.57421 0.31787-0.39307 0.37256-0.92286 0.04101-0.29395-0.04443-0.60156-0.08203-0.31104-0.24952-0.56055-0.07178-0.09912-0.07177-0.11279l0.11279-0.0581q0.5332-0.29395 0.76221-0.875 0.23242-0.58105 0.03759-1.16895-0.07178-0.23584-0.1914-0.41016-0.11621-0.17773-0.38281-0.458l-0.25293-0.24951 0.23925-0.25293q0.23584-0.23926 0.28028-0.33497 0.10938-0.23926 0.01709-0.45459-0.08887-0.21875-0.31104-0.33154-0.08545-0.04102-0.23926-0.04101-0.15381 0-0.25293 0.0581-0.0957 0.05469-0.32129 0.27686l-0.25292 0.23925-0.24952-0.23925q-0.21191-0.2085-0.31787-0.29737-0.10254-0.09229-0.25634-0.16406-0.50586-0.28027-1.06641-0.19482z m0.49219 1.20312q0.08203 0.04102 0.97754 0.93994 0.89893 0.89551 0.95361 0.97754 0.02734 0.05811 0.03418 0.09912 0.00684 0.04102 0.00683 0.15381 0 0.16748-0.04101 0.25293-0.08545 0.18115-0.25977 0.27344-0.17432 0.08887-0.36914 0.04785-0.15381-0.02734-0.28027-0.12646-0.18457-0.15381-0.33838-0.18116-0.23584-0.04102-0.44092 0.09912-0.20166 0.13672-0.24267 0.37598-0.03076 0.19482 0.05468 0.34863 0.04102 0.07178 0.61524 0.65967 0.37939 0.37939 0.47851 0.48877 0.13672 0.15381 0.1709 0.23242 0.0376 0.0752 0.0376 0.21534 0 0.14014-0.04102 0.23925-0.07178 0.14014-0.1914 0.23243-0.11621 0.08887-0.27002 0.10253-0.05811 0.01367-0.16406 0-0.10254-0.01367-0.16748-0.04785-0.06152-0.03418-1.9961-1.95849-1.93115-1.92773-1.95849-1.9961-0.06836-0.11279-0.06836-0.2666 0-0.15381 0.05468-0.28027 0.04102-0.06836 0.11621-0.14356 0.07861-0.07861 0.1709-0.11963 0.09229-0.04443 0.23242-0.04443 0.14014 0 0.21534 0.0376 0.07861 0.03418 0.23242 0.1709 0.10938 0.09912 0.48877 0.47851 0.58789 0.57422 0.65967 0.61524 0.16748 0.08545 0.3623 0.05127 0.19482-0.0376 0.32813-0.18457 0.1333-0.14697 0.14697-0.35547 0.01367-0.21191-0.14014-0.40674-0.10938-0.14014-0.14697-0.2085-0.03418-0.07178-0.04102-0.20508-0.00684-0.1333 0.02051-0.20166 0.02734-0.12646 0.12647-0.22558 0.09912-0.09912 0.22558-0.15381 0.08203-0.04102 0.22217-0.03418 0.14014 0.00684 0.22559 0.04785z m-7.28028 5.04151q0.0957 0.02734 0.15723 0.06152 0.06494 0.03418 1.98926 1.95508 1.92773 1.91748 1.96191 1.98926 0.03418 0.06836 0.05469 0.17431 0.02051 0.10254 0.00683 0.20166-0.02734 0.19482-0.17431 0.32813-0.14697 0.1333-0.33496 0.15381-0.18799 0.02051-0.35889-0.07862-0.06836-0.04102-0.65625-0.6289-0.40674-0.40674-0.5127-0.49561-0.10254-0.09229-0.17431-0.11963-0.11279-0.04101-0.2461-0.03418-0.12988 0.00684-0.229 0.04785-0.14014 0.07178-0.22559 0.20508-0.08203 0.12988-0.0957 0.27002-0.01367 0.22559 0.14014 0.42041 0.12646 0.16748 0.15381 0.23242 0.02734 0.06152 0.02734 0.21534 0 0.12646-0.00684 0.17089-0.00684 0.04102-0.03417 0.09571-0.04443 0.08545-0.13672 0.1709-0.08887 0.08203-0.18799 0.11621-0.0957 0.03418-0.22901 0.02734-0.1333-0.00684-0.22558-0.05469-0.08887-0.04785-0.98779-0.93652-0.89551-0.89209-0.93653-0.97412-0.04102-0.08545-0.04101-0.2461 0-0.16064 0.03418-0.24267 0.03418-0.08545 0.12646-0.18457 0.09229-0.09912 0.16748-0.12647 0.07861-0.02734 0.23926-0.02734 0.16064 0 0.22217 0.02734 0.06494 0.02734 0.23242 0.15381 0.19482 0.15381 0.40332 0.14014 0.21191-0.01367 0.35889-0.15381 0.14697-0.14014 0.18115-0.33496 0.0376-0.19482-0.04785-0.34863-0.04102-0.07178-0.61524-0.65967-0.37939-0.37939-0.47851-0.48877-0.13672-0.15381-0.17432-0.22901-0.03418-0.07861-0.03418-0.21875 0-0.14014 0.04102-0.23925 0.05811-0.12646 0.17431-0.21534 0.11963-0.09229 0.2461-0.11962l0.11279-0.01368 0.11279 0.01368z"
                          fill="#A3A7AF"
                         />
                      </svg>
                    </div>
                    <div
                      data-pencil-name="Texto Press francés"
                      className="box-border w-fit shrink-0 h-fit flex flex-col gap-[4px] justify-start items-start"
                    >
                      <div
                        data-pencil-name="Nombre Press francés"
                        className="text-[12px]/[normal] box-border text-[#F5F7F4] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        Press francés
                      </div>
                      <div
                        data-pencil-name="Detalle Press francés"
                        className="text-[10px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
                      >
                        3 × 10 · Tríceps
                      </div>
                    </div>
                  </div>
                  <svg
                    data-pencil-name="Flecha 06"
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
          </div>
          <div
            data-pencil-name="Barra fija de acciones"
            className="[box-sizing:content-box] w-[390px] h-[119.5px] shrink-0 flex flex-col gap-[8px] p-[12px_20px_16px_20px] justify-start items-center bg-[#24272DF5] [border-width:1px_0px_0px_0px] [border-style:solid] [border-color:#454A54] [margin:-0.5px_0px_0px_0px]"
          >
            <div
              data-pencil-name="Completar ejercicio"
              className="box-border w-full h-[56px] shrink-0 [box-shadow:0px_6px_16px_#F2643044] flex flex-row gap-[10px] justify-center items-center bg-[#F26430] rounded-[18px]"
            >
              <svg
                data-pencil-name="Check completar"
                viewBox="0 0 13.99993896484375 14"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[21px] shrink-0 h-[21px]"
              >
                <path
                  d="M6.69238 0.60156q-1.16211 0.04102-2.22851 0.50586-1.06299 0.46143-1.90381 1.26807-0.8374 0.80322-1.34326 1.85254-0.48877 1.0083-0.60157 2.15674-0.02734 0.19482-0.02734 0.61523 0 0.42041 0.02734 0.61523 0.11279 1.14844 0.60157 2.15674 0.65967 1.40137 1.89697 2.33789 1.24072 0.93652 2.75146 1.20313 0.5332 0.09912 1.13477 0.09912 0.75537 0 1.43213-0.15381 0.68018-0.15381 1.35351-0.4751 1.26123-0.61865 2.16358-1.70215 0.90234-1.0835 1.25439-2.44384 0.29395-1.11768 0.18116-2.25244-0.11279-1.13477-0.60157-2.17041-0.58789-1.20313-1.62011-2.08497-1.02881-0.88184-2.31397-1.2749-1.0083-0.30762-2.15674-0.25293z m0.96729 1.18946q1.07666 0.14014 1.99267 0.68017 0.91602 0.54004 1.56201 1.4082 0.82715 1.104 1.00831 2.54639 0.01367 0.16748 0.01367 0.57422 0 0.40674-0.01367 0.57422-0.14014 1.16211-0.7212 2.12939-0.58105 0.96387-1.53466 1.62354-0.4751 0.33496-1.04932 0.56055-0.57422 0.22217-1.18945 0.30761-0.25293 0.04102-0.72803 0.04102-0.4751 0-0.72803-0.04102-1.07666-0.15381-1.95849-0.68701-0.88184-0.5332-1.52784-1.3877-0.82715-1.104-1.0083-2.54638-0.01367-0.16748-0.01367-0.57422 0-0.40674 0.01367-0.57422 0.14014-1.12109 0.66993-2.05078 0.5332-0.92969 1.43212-1.58936 0.54346-0.40674 1.20655-0.66992 0.6665-0.2666 1.32617-0.3247l0.25293-0.02735q0.0957-0.01367 0.4751 0 0.37939 0.01367 0.51953 0.02735z m0.95019 3.47265q-0.06836 0.02734-0.12646 0.05127-0.05469 0.02051-1.06299 1.02539l-0.99463 0.99463-0.40674-0.40332q-0.2666-0.2666-0.3623-0.33838-0.12646-0.11279-0.19824-0.14013-0.06836-0.02734-0.19483-0.02735-0.12646 0-0.16748 0.01367-0.04102 0.01367-0.09912 0.04102-0.18115 0.09912-0.28027 0.2666-0.04102 0.08545-0.04102 0.25293l0 0.01367q0 0.14014 0.03418 0.21192 0.0376 0.06836 0.17774 0.22216 0.0957 0.11279 0.48876 0.50586l0.04102 0.04102q0.42041 0.42041 0.55371 0.54687 0.1333 0.12305 0.20166 0.15381 0.14014 0.06836 0.29395 0.05469 0.15381-0.01367 0.28027-0.09912 0.07178-0.05469 1.28857-1.27149 0.86816-0.86816 1.04932-1.06298 0.18457-0.19824 0.21192-0.27002 0.0957-0.27686-0.05811-0.52295-0.15381-0.24609-0.44775-0.25977-0.12646-0.01367-0.18116 0z"
                  fill="#2A2D34"
                 />
              </svg>
              <div
                data-pencil-name="Texto Completar ejercicio"
                className="text-[14px]/[normal] box-border text-[#2A2D34] font-[Geist,system-ui,sans-serif] font-normal text-left [white-space:nowrap]"
              >
                Completar ejercicio
              </div>
            </div>
            <div
              data-pencil-name="Finalizar entrenamiento"
              role="button"
 onClick={() => navigate(ROUTES.workoutFinish)}
 className="cursor-pointer box-border w-fit h-[28px] shrink-0 flex flex-row gap-0 justify-start items-center"
            >
              <div
                data-pencil-name="Texto Finalizar entrenamiento"
                className="text-[11px]/[normal] box-border text-[#A3A7AF] font-[Geist,system-ui,sans-serif] font-semibold text-left [white-space:nowrap]"
              >
                Finalizar entrenamiento
              </div>
            </div>
          </div>
        </div>
  )
}
