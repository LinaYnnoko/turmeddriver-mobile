import * as React from "react";
import Svg, {
	Ellipse,
	Path,
	Defs,
	RadialGradient,
	Stop,
} from "react-native-svg";

function IconPresent(props) {
	return (
		<Svg
			width={350}
			height={192}
			viewBox="0 0 350 192"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Ellipse
				cx={175}
				cy={96}
				rx={175}
				ry={96}
				fill="url(#paint0_radial_1453_1449)"
			/>
			<Path
				d="M192.715 56.865c4.273-4.03-.671-9.258-10.019-6.02-.551.192-1.063.393-1.545.602.916-1.759 2.268-3.679 4.293-5.517 0 0-3.782 1.358-5.529 1.014-2.168-.426-2.847-3.069-2.847-3.069s-2.255 4.91-3.403 8.765c-1.645-3.312-3.466-6.534-3.466-6.534s-.972 2.254-2.753 3.11c-1.435.695-7.339 1.293-7.339 1.293 1.968 1.007 3.659 2.25 5.093 3.538-1.508-.4-3.231-.7-5.2-.842-7.823-.567-10.895 2.224-9.849 4.98l-3.776.122 2.055 7.705 1.277.363c3.03 10.265 2.297 21.654 2.287 21.783l-.051.742.707.208c11.318 3.334 21.602 11.017 21.602 11.017s13.333-8.824 20.664-11.018l.641-.193.013-.675c.004-.159.325-14.375 4.004-23.642a9.55 9.55 0 01.712-.078l.775-.047.078-.78c.003-.031.32-4.496 1.487-6.318l-9.911-.509zM148.8 60.469l6.078 1.649v3.809l-5.045-1.433-1.033-4.025zm9.445 28.605a65.948 65.948 0 00-4.389-1.528c.12-2.646.294-11.765-2.093-20.588l4.415 1.255c.855 3.771 2.275 11.541 2.067 20.86zm7.399-32.971c7.588.55 8.923 4.466 8.923 4.466s-4.623 1.69-7.48 1.69c-9.32 0-10.667-6.825-1.443-6.156zm9.364 5.043l7.618.863-9.497 2.298-5.424-1.212 7.303-1.95zm-9.121 3.432l6.338 1.415v4.86l-6.543-1.825.205-4.45zm7.539 32.753c-1.384-1.027-3.69-2.613-6.752-4.312.243-4.479.272-16.445.273-21.748l6.479 1.84v24.22zm8.48-4.084a129.927 129.927 0 00-6.656 4.216V72.272a480.354 480.354 0 017.652-2.735c-.55 5.305-.895 19.148-.996 23.71zm3.075-26.092s-9.129 2.93-10.93 3.594v-4.768l11.073-2.68-.143 3.854zm-1.125-6.995c-4.274 1.095-8.82.323-8.82.323s-.852-4.186 6.048-6.576c8.387-2.905 11.703 3.965 2.772 6.253zm6.292-1.592l5.434.305-3.264.79-3.897-.384c.631-.22 1.204-.46 1.727-.712zm3.615 28.968c-1.357.444-2.787 1.024-4.229 1.681.01-4.391.278-14.124 2.313-22.636 2.091-.645 4.03-1.195 5.612-1.567-3.025 8.424-3.598 19.65-3.696 22.522zm5.66-24.779s-3.001.88-4.917 1.408l.482-3.25 5.217-1.263c-.427 1.177-.782 3.105-.782 3.105zM116.184 115.364V127h-1.409v-10.386h-5.864V127h-1.409v-11.636h8.682zm6.206 11.818c-.788 0-1.479-.188-2.074-.563-.591-.375-1.053-.899-1.386-1.574-.33-.674-.495-1.462-.495-2.363 0-.909.165-1.703.495-2.381.333-.678.795-1.204 1.386-1.579.595-.375 1.286-.563 2.074-.563.788 0 1.477.188 2.068.563.595.375 1.057.901 1.386 1.579.334.678.5 1.472.5 2.381 0 .901-.166 1.689-.5 2.363a3.758 3.758 0 01-1.386 1.574c-.591.375-1.28.563-2.068.563zm0-1.205c.598 0 1.091-.153 1.477-.46.387-.307.673-.71.858-1.21.186-.5.279-1.042.279-1.625 0-.584-.093-1.127-.279-1.631a2.732 2.732 0 00-.858-1.221c-.386-.311-.879-.466-1.477-.466-.599 0-1.091.155-1.477.466-.387.31-.673.717-.858 1.221a4.672 4.672 0 00-.279 1.631c0 .583.093 1.125.279 1.625.185.5.471.903.858 1.21.386.307.878.46 1.477.46zm5.229 1.023v-1.25h.318c.261 0 .479-.051.653-.153.174-.106.315-.29.421-.552.11-.265.193-.632.25-1.102.06-.473.104-1.076.13-1.807l.159-3.863h5.819V127h-1.341v-7.477h-3.205l-.136 3.113a14.308 14.308 0 01-.193 1.892c-.095.542-.241.997-.438 1.364a2.008 2.008 0 01-.773.83c-.322.185-.725.278-1.21.278h-.454zm10.761 3.273a2.93 2.93 0 01-.608-.057 1.601 1.601 0 01-.369-.102l.341-1.182c.325.083.613.113.863.091a1.04 1.04 0 00.665-.335c.197-.197.377-.518.54-.961l.25-.682-3.227-8.772h1.454l2.409 6.954h.091l2.409-6.954h1.455l-3.705 10c-.167.45-.373.824-.619 1.119a2.321 2.321 0 01-.858.665 2.646 2.646 0 01-1.091.216zm14.504-12V127h-1.341v-8.727h1.341zm-.522 4.159v1.25a13.11 13.11 0 01-.904.301c-.299.083-.614.15-.943.199-.33.045-.691.068-1.085.068-.989 0-1.783-.267-2.381-.801-.595-.534-.892-1.335-.892-2.404v-2.795h1.341v2.795c0 .447.085.815.256 1.103.17.288.401.502.693.642.291.14.619.21.983.21a7.1 7.1 0 001.539-.153c.463-.106.927-.245 1.393-.415zm5.551 4.773a3.554 3.554 0 01-1.506-.313 2.58 2.58 0 01-1.074-.915c-.265-.401-.398-.886-.398-1.454 0-.5.099-.906.296-1.216.197-.315.46-.561.79-.739.329-.178.693-.31 1.091-.398.401-.09.804-.162 1.21-.215.53-.069.96-.12 1.29-.154.333-.038.575-.1.727-.187.155-.087.233-.239.233-.455v-.045c0-.561-.154-.997-.46-1.307-.304-.311-.764-.466-1.381-.466-.64 0-1.142.14-1.506.42-.363.281-.619.58-.767.898l-1.273-.454c.228-.531.531-.944.909-1.239.383-.299.8-.508 1.25-.625a5.205 5.205 0 011.341-.182c.281 0 .603.034.966.102.368.065.722.199 1.063.404.344.204.63.513.858.926.227.413.341.966.341 1.659V127h-1.341v-1.182h-.068a2.36 2.36 0 01-.455.608c-.212.216-.494.4-.847.551-.352.152-.782.228-1.289.228zm.204-1.205c.53 0 .977-.104 1.341-.312.368-.209.644-.478.83-.807.189-.33.284-.676.284-1.04v-1.227c-.057.068-.182.13-.375.187-.19.053-.409.101-.659.142-.247.038-.487.072-.722.102-.231.027-.419.05-.562.069a5.107 5.107 0 00-.978.221 1.69 1.69 0 00-.727.449c-.182.197-.273.466-.273.807 0 .466.173.818.517 1.057.349.235.79.352 1.324.352zm7.584-.977l4.205-6.75h1.545V127h-1.341v-6.75l-4.182 6.75h-1.568v-8.727h1.341v6.75zm3.318-9.659h1.25c0 .613-.212 1.115-.636 1.505-.424.39-1 .586-1.727.586-.716 0-1.286-.196-1.711-.586-.42-.39-.63-.892-.63-1.505h1.25c0 .295.081.555.244.778.167.224.449.335.847.335.397 0 .681-.111.852-.335a1.23 1.23 0 00.261-.778zM178.407 127v-8.727h6.864V127h-1.341v-7.477h-4.182V127h-1.341zm12.858.182c-.788 0-1.479-.188-2.074-.563-.591-.375-1.053-.899-1.386-1.574-.33-.674-.495-1.462-.495-2.363 0-.909.165-1.703.495-2.381.333-.678.795-1.204 1.386-1.579.595-.375 1.286-.563 2.074-.563.788 0 1.477.188 2.068.563.595.375 1.057.901 1.386 1.579.334.678.5 1.472.5 2.381 0 .901-.166 1.689-.5 2.363a3.758 3.758 0 01-1.386 1.574c-.591.375-1.28.563-2.068.563zm0-1.205c.598 0 1.091-.153 1.477-.46.387-.307.673-.71.858-1.21.186-.5.279-1.042.279-1.625 0-.584-.093-1.127-.279-1.631a2.732 2.732 0 00-.858-1.221c-.386-.311-.879-.466-1.477-.466-.599 0-1.091.155-1.477.466-.387.31-.673.717-.858 1.221a4.672 4.672 0 00-.279 1.631c0 .583.093 1.125.279 1.625.185.5.471.903.858 1.21.386.307.878.46 1.477.46zm5.07 3.523v-3.75h.727c.178-.186.331-.386.46-.602.129-.216.241-.472.335-.767.099-.3.182-.663.25-1.091.068-.432.129-.953.182-1.563l.296-3.454h5.545v7.477h1.341v3.75h-1.341V127h-6.455v2.5h-1.34zm2.25-3.75h4.204v-6.227h-2.954l-.228 2.204a24.52 24.52 0 01-.352 2.392c-.14.682-.364 1.226-.67 1.631zm11.234 1.455a3.554 3.554 0 01-1.506-.313 2.58 2.58 0 01-1.074-.915c-.265-.401-.397-.886-.397-1.454 0-.5.098-.906.295-1.216.197-.315.46-.561.79-.739.329-.178.693-.31 1.091-.398.401-.09.805-.162 1.21-.215.53-.069.96-.12 1.29-.154.333-.038.576-.1.727-.187.155-.087.233-.239.233-.455v-.045c0-.561-.153-.997-.46-1.307-.303-.311-.764-.466-1.381-.466-.64 0-1.142.14-1.506.42-.363.281-.619.58-.767.898l-1.272-.454c.227-.531.53-.944.909-1.239a3.398 3.398 0 011.25-.625 5.193 5.193 0 011.341-.182c.28 0 .602.034.966.102.367.065.721.199 1.062.404.345.204.631.513.858.926.227.413.341.966.341 1.659V127h-1.341v-1.182h-.068a2.36 2.36 0 01-.455.608c-.212.216-.494.4-.846.551-.353.152-.783.228-1.29.228zm.204-1.205c.531 0 .978-.104 1.341-.312.368-.209.644-.478.83-.807.189-.33.284-.676.284-1.04v-1.227c-.057.068-.182.13-.375.187a6.143 6.143 0 01-.659.142c-.246.038-.487.072-.722.102-.231.027-.418.05-.562.069a5.097 5.097 0 00-.977.221c-.3.099-.542.248-.728.449-.182.197-.272.466-.272.807 0 .466.172.818.517 1.057.348.235.789.352 1.323.352zm6.243 4.273v-12h1.296v1.386h.159c.098-.151.235-.345.409-.579.178-.239.432-.451.761-.637.334-.189.784-.284 1.353-.284.734 0 1.382.184 1.943.551.56.368.998.888 1.312 1.563.315.674.472 1.469.472 2.386 0 .924-.157 1.725-.472 2.403-.314.675-.75 1.197-1.307 1.569-.556.367-1.198.551-1.926.551-.56 0-1.009-.093-1.346-.279-.337-.189-.597-.403-.779-.642a8.61 8.61 0 01-.42-.602h-.114v4.614h-1.341zm1.319-7.637c0 .659.096 1.241.289 1.745.193.5.476.892.847 1.176.371.28.826.42 1.364.42.56 0 1.028-.147 1.403-.443.379-.299.663-.701.852-1.204.193-.508.29-1.072.29-1.694 0-.613-.095-1.166-.284-1.659-.186-.496-.468-.888-.847-1.176-.375-.292-.846-.437-1.414-.437-.546 0-1.004.138-1.375.414-.372.273-.652.656-.841 1.148-.19.489-.284 1.059-.284 1.71zm8.431 4.364v-8.727h1.341v3.795h.887l3.136-3.795h1.727l-3.522 4.204 3.568 4.523h-1.728l-2.863-3.682h-1.205V127h-1.341zm9.935-1.977l4.205-6.75h1.545V127h-1.341v-6.75l-4.182 6.75h-1.568v-8.727h1.341v6.75zm-148.242 19l4.204-6.75h1.546V146h-1.341v-6.75L87.936 146h-1.568v-8.727h1.34v6.75zm18.547-3v1.25h-4.818v-1.25h4.818zm-4.5-3.75V146h-1.341v-8.727h1.341zm5.522 0V146h-1.34v-8.727h1.34zm5.995 8.909c-.788 0-1.479-.188-2.074-.563-.591-.375-1.053-.899-1.387-1.574-.329-.674-.494-1.462-.494-2.363 0-.909.165-1.703.494-2.381.334-.678.796-1.204 1.387-1.579.595-.375 1.286-.563 2.074-.563.788 0 1.477.188 2.068.563.595.375 1.057.901 1.386 1.579.334.678.5 1.472.5 2.381 0 .901-.166 1.689-.5 2.363a3.758 3.758 0 01-1.386 1.574c-.591.375-1.28.563-2.068.563zm0-1.205c.598 0 1.091-.153 1.477-.46a2.72 2.72 0 00.858-1.21c.186-.5.278-1.042.278-1.625 0-.584-.092-1.127-.278-1.631a2.748 2.748 0 00-.858-1.221c-.386-.311-.879-.466-1.477-.466-.599 0-1.091.155-1.478.466-.386.31-.672.717-.857 1.221a4.672 4.672 0 00-.279 1.631c0 .583.093 1.125.279 1.625.185.5.471.903.857 1.21.387.307.879.46 1.478.46zm6.001 1.023v-8.727h3.568c.94 0 1.686.212 2.239.636.553.424.83.985.83 1.682 0 .53-.158.941-.472 1.233-.314.288-.718.483-1.21.585.322.046.634.159.937.341.307.182.561.432.762.75.2.314.301.701.301 1.159 0 .447-.114.847-.341 1.199a2.332 2.332 0 01-.977.835c-.425.205-.932.307-1.523.307h-4.114zm1.273-1.227h2.841c.462 0 .824-.11 1.085-.33.261-.22.392-.519.392-.898 0-.45-.131-.804-.392-1.062-.261-.261-.623-.392-1.085-.392h-2.841v2.682zm0-3.841h2.295c.36 0 .669-.049.926-.148a1.3 1.3 0 00.591-.432 1.09 1.09 0 00.211-.67.99.99 0 00-.461-.864c-.306-.212-.729-.318-1.267-.318h-2.295v2.432zm8.871-.5h2.5c1.022 0 1.805.259 2.346.778.542.519.813 1.176.813 1.972 0 .523-.122.998-.364 1.426a2.637 2.637 0 01-1.068 1.017c-.47.25-1.046.375-1.727.375h-3.659v-8.727h1.34v7.477h2.319c.53 0 .966-.14 1.306-.42.341-.281.512-.641.512-1.08a1.42 1.42 0 00-.512-1.131c-.34-.291-.776-.437-1.306-.437h-2.5v-1.25zm7.045 5.568v-8.727h1.341V146h-1.341zm7.455.182c-.841 0-1.567-.186-2.177-.557a3.742 3.742 0 01-1.403-1.568c-.326-.674-.489-1.459-.489-2.352 0-.894.163-1.682.489-2.364.33-.686.788-1.22 1.375-1.602.591-.387 1.28-.58 2.068-.58.455 0 .904.076 1.347.227.443.152.846.398 1.21.739.364.337.653.784.869 1.341.216.557.324 1.242.324 2.057v.568h-6.727v-1.159h5.364c0-.493-.099-.932-.296-1.318a2.223 2.223 0 00-.829-.915c-.356-.224-.777-.335-1.262-.335-.534 0-.996.132-1.386.397a2.625 2.625 0 00-.892 1.023 3.01 3.01 0 00-.313 1.352v.773c0 .659.114 1.218.341 1.676.231.455.551.801.96 1.04.41.235.885.352 1.427.352.352 0 .67-.049.954-.147.288-.103.536-.254.744-.455.209-.205.37-.458.483-.761l1.296.363c-.136.44-.366.826-.688 1.159-.322.33-.719.587-1.193.773a4.416 4.416 0 01-1.596.273zm10.153-.182v-8.727h3.568c.94 0 1.686.212 2.239.636.553.424.829.985.829 1.682 0 .53-.157.941-.471 1.233-.315.288-.718.483-1.21.585.322.046.634.159.937.341.307.182.561.432.761.75.201.314.302.701.302 1.159 0 .447-.114.847-.341 1.199a2.335 2.335 0 01-.978.835c-.424.205-.931.307-1.522.307h-4.114zm1.273-1.227h2.841c.462 0 .824-.11 1.085-.33.261-.22.392-.519.392-.898 0-.45-.131-.804-.392-1.062-.261-.261-.623-.392-1.085-.392h-2.841v2.682zm0-3.841h2.295c.36 0 .669-.049.926-.148a1.3 1.3 0 00.591-.432c.14-.189.21-.413.21-.67a.989.989 0 00-.46-.864c-.307-.212-.729-.318-1.267-.318h-2.295v2.432zm11.257 5.25c-.788 0-1.479-.188-2.074-.563-.591-.375-1.053-.899-1.386-1.574-.33-.674-.495-1.462-.495-2.363 0-.909.165-1.703.495-2.381.333-.678.795-1.204 1.386-1.579.595-.375 1.286-.563 2.074-.563.788 0 1.477.188 2.068.563.595.375 1.057.901 1.386 1.579.334.678.5 1.472.5 2.381 0 .901-.166 1.689-.5 2.363a3.758 3.758 0 01-1.386 1.574c-.591.375-1.28.563-2.068.563zm0-1.205c.598 0 1.091-.153 1.477-.46a2.72 2.72 0 00.858-1.21c.186-.5.278-1.042.278-1.625 0-.584-.092-1.127-.278-1.631a2.748 2.748 0 00-.858-1.221c-.386-.311-.879-.466-1.477-.466-.599 0-1.091.155-1.477.466-.387.31-.673.717-.858 1.221a4.672 4.672 0 00-.279 1.631c0 .583.093 1.125.279 1.625.185.5.471.903.858 1.21.386.307.878.46 1.477.46zm5.456-1.204h1.432a1.1 1.1 0 00.534.897c.329.205.757.307 1.284.307.538 0 .998-.11 1.381-.329.382-.224.573-.584.573-1.08a1.34 1.34 0 00-.216-.761 1.42 1.42 0 00-.607-.512 2.193 2.193 0 00-.927-.181h-1.5v-1.205h1.5c.534 0 .928-.121 1.182-.364.258-.242.387-.545.387-.909 0-.39-.139-.702-.415-.937-.277-.239-.669-.358-1.176-.358-.512 0-.938.115-1.279.347-.341.227-.521.52-.54.88h-1.409c.016-.47.159-.884.432-1.244a2.7 2.7 0 011.114-.852c.47-.209 1.007-.313 1.613-.313.614 0 1.146.108 1.597.324.455.212.805.502 1.051.869.25.364.375.777.375 1.239 0 .492-.138.89-.415 1.193a2.295 2.295 0 01-1.039.648v.091c.329.022.615.129.858.318.246.186.437.43.573.733.137.299.205.631.205.994 0 .53-.142.993-.426 1.387-.284.39-.674.693-1.171.909-.496.212-1.062.318-1.698.318-.618 0-1.171-.101-1.66-.301-.488-.205-.876-.487-1.164-.847a2.105 2.105 0 01-.449-1.261zm13.224.409l3.046-6.909h1.272L185.827 146h-1.091l-3.705-8.727h1.25l3 6.909zm-3.432-6.909V146h-1.34v-8.727h1.34zm6.864 8.727v-8.727h1.341V146h-1.341zm7.341.182c-.788 0-1.479-.188-2.074-.563-.591-.375-1.053-.899-1.386-1.574-.33-.674-.495-1.462-.495-2.363 0-.909.165-1.703.495-2.381.333-.678.795-1.204 1.386-1.579.595-.375 1.286-.563 2.074-.563.788 0 1.477.188 2.068.563.595.375 1.057.901 1.387 1.579.333.678.5 1.472.5 2.381 0 .901-.167 1.689-.5 2.363-.33.675-.792 1.199-1.387 1.574-.591.375-1.28.563-2.068.563zm0-1.205c.598 0 1.091-.153 1.477-.46.387-.307.673-.71.858-1.21.186-.5.279-1.042.279-1.625 0-.584-.093-1.127-.279-1.631a2.732 2.732 0 00-.858-1.221c-.386-.311-.879-.466-1.477-.466-.599 0-1.091.155-1.477.466-.387.31-.673.717-.858 1.221a4.672 4.672 0 00-.279 1.631c0 .583.093 1.125.279 1.625.185.5.471.903.858 1.21.386.307.878.46 1.477.46zm5.097 1.023l3.545-4.432-3.5-4.295h1.591l2.909 3.727h.727v-3.727h1.341V141h.705l2.909-3.727h1.591l-3.478 4.295 3.523 4.432h-1.613l-2.955-3.75h-.682V146h-1.341v-3.75h-.682l-2.977 3.75h-1.613zm19.62-4.977v1.25h-4.818v-1.25h4.818zm-4.5-3.75V146h-1.341v-8.727h1.341zm5.523 0V146h-1.341v-8.727h1.341zm5.994 8.909c-.788 0-1.479-.188-2.074-.563-.59-.375-1.053-.899-1.386-1.574-.329-.674-.494-1.462-.494-2.363 0-.909.165-1.703.494-2.381.333-.678.796-1.204 1.386-1.579.595-.375 1.286-.563 2.074-.563.788 0 1.478.188 2.069.563.594.375 1.056.901 1.386 1.579.333.678.5 1.472.5 2.381 0 .901-.167 1.689-.5 2.363a3.772 3.772 0 01-1.386 1.574c-.591.375-1.281.563-2.069.563zm0-1.205c.599 0 1.091-.153 1.478-.46a2.72 2.72 0 00.858-1.21c.185-.5.278-1.042.278-1.625 0-.584-.093-1.127-.278-1.631a2.748 2.748 0 00-.858-1.221c-.387-.311-.879-.466-1.478-.466-.598 0-1.091.155-1.477.466-.386.31-.672.717-.858 1.221a4.695 4.695 0 00-.278 1.631c0 .583.093 1.125.278 1.625.186.5.472.903.858 1.21.386.307.879.46 1.477.46zm9.547 1.205c-.818 0-1.522-.193-2.113-.58a3.772 3.772 0 01-1.364-1.596c-.318-.678-.477-1.453-.477-2.324 0-.887.163-1.669.488-2.347.33-.682.788-1.214 1.375-1.596.591-.387 1.281-.58 2.068-.58.614 0 1.167.114 1.66.341.492.227.895.545 1.21.955.314.409.509.886.585 1.431h-1.341c-.102-.397-.329-.75-.682-1.056-.348-.311-.818-.466-1.409-.466-.522 0-.981.136-1.375.409-.39.269-.695.649-.915 1.142-.215.488-.323 1.062-.323 1.721 0 .675.106 1.262.318 1.762.216.5.519.888.909 1.164.394.277.856.415 1.386.415.349 0 .665-.06.949-.182.284-.121.525-.295.722-.522.197-.228.337-.5.42-.818h1.341a3.112 3.112 0 01-.562 1.392 3.153 3.153 0 01-1.177.977c-.484.238-1.049.358-1.693.358zm4.705-7.659v-1.25h7.091v1.25h-2.864V146h-1.341v-7.477h-2.886zm10.388 5.5l4.204-6.75h1.546V146h-1.341v-6.75l-4.182 6.75h-1.568v-8.727h1.341v6.75zm9.978-9.659l-.113 8.363h-1.319l-.113-8.363h1.545zm-.772 11.727a.983.983 0 01-.722-.301.985.985 0 01-.301-.722c0-.28.1-.521.301-.721a.984.984 0 01.722-.302c.28 0 .52.101.721.302.201.2.301.441.301.721a.964.964 0 01-.142.512c-.091.155-.214.28-.369.375a.984.984 0 01-.511.136z"
				fill="#08366A"
			/>
			<Defs>
				<RadialGradient
					id="paint0_radial_1453_1449"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(0 96 -175 0 175 96)"
				>
					<Stop stopColor="#fff" />
					<Stop offset={1} stopColor="#fff" stopOpacity={0} />
				</RadialGradient>
			</Defs>
		</Svg>
	);
}

export default IconPresent;