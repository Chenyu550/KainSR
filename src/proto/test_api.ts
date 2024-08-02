import * as protobuf from 'protobufjs';

// Chuỗi Base64 của bạn (đã được giải mã)
const base64String = `CAEQhbYBGkpodHRwczovL2F1dG9wYXRjaGNuLWlwdjYuYmhzci5jb20vYXNiL0JldGFMaXZlL291dHB1dF83NjYzOTk3X2NkMDg2YWYzZjMwNyINMTM5LjE5Ni4xMjQuMSoRYmV0YV9yZWxlYXNlMDFfY244AVJKaHR0cHM6Ly9hdXRvcGF0Y2hjbi1pcHY2LmJoc3IuY29tL2x1YS9CZXRhTGl2ZS9vdXRwdXRfNzY2ODg3NV8wMjMxNzI3NDU4YWRyUmh0dHBzOi8vYXV0b3BhdGNoY24taXB2Ni5iaHNyLmNvbS9kZXNpZ25fZGF0YS9CZXRhTGl2ZS9vdXRwdXRfNzY4OTg2OF80NTY2NjJiNDgyNzfIEgHCExlodHRwczovL2Jicy5taWhveW8uY29tL3NyqhlkaHR0cHM6Ly91c2VyLm1paG95by5jb20vc2RrL2FncmVlbWVudC5odG1sIy91c2VyX3Byb3RvP2FwcF9pZD04Jmxhbmc9emgtY24mY2hhbm5lbF9pZD0xJmJpej1oa3JwZ19jbvAZAYIgNGh0dHBzOi8vZG93bmxvYWRjbi5iaHNyLmNvbS9yZXBsYXkvYmV0YV9yZWxlYXNlMDFfY27aI6ABaHR0cHM6Ly93ZWJzdGF0aWMubWlob3lvLmNvbS9iZXRhL2NzYy1zZXJ2aWNlLWNlbnRlci1mZS9pbmRleC5odG1sP3NpZ25fdHlwZT0yJmF1dGhfYXBwaWQ9Y3NjJmF1dGhrZXlfdmVyPTEmd2luX2RpcmVjdGlvbj1wb3J0cmFpdCZwYWdlX2lkPTQmZXh0cmFfZGV2aWNlX2luZm89MYglAaopBzc2Njg4NzXiLGVodHRwczovL3VzZXIubWlob3lvLmNvbS9zZGsvYWdyZWVtZW50Lmh0bWwjL3RoaXJkX3Byb3RvP2FwcF9pZD04Jmxhbmc9emgtY24mY2hhbm5lbF9pZD0xJmJpej1oa3JwZ19jbso2SGh0dHA6Ly9hbGItMXE4dDhkNWsxeXFocXZ2eXdzLmNuLXNoYW5naGFpLmFsYi5hbGl5dW5jcy5jb20vdXBsb2FkX3JlcGxhecpFQ2h0dHBzOi8vYXV0b3BhdGNoY24taXB2Ni5iaHNyLmNvbS9pZml4L0JldGFMaXZlL291dHB1dF8wXzQwZDJjZTAyNTPASQHCSlHmtYvor5XotYTmoLzmoKHpqozlpLHotKXvvIzor7fnoa7orqTnmbvlvZXotKblj7flj4rmiYDpgInmnI3liqHlmajmmK/lkKbmraPnoa7jgIKiTWlodHRwczovL3VzZXIubWlob3lvLmNvbS9zZGsvYWdyZWVtZW50Lmh0bWwjL2Z1bGxfcHJpdl9wcm90bz9hcHBfaWQ9OCZsYW5nPXpoLWNuJmNoYW5uZWxfaWQ9MSZiaXo9aGtycGdfY27SVURodHRwczovL3VzZXIubWlob3lvLmNvbS9jb250ZW50LXBhZ2UuaHRtbD9pQ2hhbklkPTE0MyZpSW5mb0lkPTEwMzMyMLJZJzI0MDg6NDAwMjoxMTVjOmIzMDQ6MTcxYjpjNzM5OjMzYjQ6ODZlOYhbAfBcAfBhAfpiATDqZWhodHRwczovL3VzZXIubWlob3lvLmNvbS9zZGsvYWdyZWVtZW50Lmh0bWwjL3RlZW5hZ2VyX3Byb3RvP2FwcF9pZD04Jmxhbmc9emgtY24mY2hhbm5lbF9pZD0xJmJpej1oa3JwZ19jbvBqAYJx0BVSV015WWhBQUFBQWhWbWdjMWNXdlMyK0hCM082R1JSckFBZ0FBREhGUk0xWWsxNzVKR201M1FQOUxCRmJwOVpwUzVCbXZxTndXd2dlczZVZ2psZ3lyM3doNUI3aTRvaFFxemtYL3ByNHFNNExnc01jT1ovdDhab3d2RUtMdnRmQll4NnVkZ3Y0U0VBUFoyRTliRm5MTklxM1lDeGpzWWFWaUNyMXdFaVFBTWRidzhxKzFtS0ZNU0hBMHpzOHBtZDRTUm9PRzNqVjNHZTlSSkhTZHk1enVyRUZFckZORXlzc3FEMGdvOWw5Q1Fja3lYQ1h3eUdrTGxVcFZUSk1aUXVZZjFTTlRPRDlCK3I1Mng3cUpxOGZubWxFaUwxRmM3U2ZqOE9ZamRLenpaU0VGR0dSWHBkYXVoU3BsZWFwamhSaGNwVFByU3U5Y3Q5Z3NzRklMaUtsVE1PR1oyL1V4MHJxelJBNjFTMU5rbnZQRXEwYzRreFBDTTNiR3NJOW1LcW15TWhGcWdZVGJHMDZnZXpmb3ZqbFlqWUpGaEUxajdkR205K3B2bVoyZWwwbFFlTi9WaWR3UnMzeFE1dU42N3cxUmdkK1hqU0x1N0gzMEJMNVNmRkZaeEd0ZDVkZUp5V3JRVERZRStBelZhaWRrMmtPVk5rUHdHL2N1dFA0bnMyT0l5VmpGa2RGVDFMbko4dnZDYmw0WFY3U2Q4NTRHc2VRUDdIM1lOdmRScklIaUtFcnltRmVTdXdaUklVMldjbDVLRWRsOWQ2cXpyL3FEVnc4TDZOeTlmUC9LdEVndTJZR0plM2wyemhxcXFMRVgvQUhNaGpjcXBzMU0wcFB5K2MyNHBoV3FHU3Y3L2JnRUxPM0QrSSt2SHgwQlJySlZWTlhOT0dxamltZzdmMlBlWXo4Z1JRcWdRekFST080OUI3MzZoV0IxOEdWWjJZZTJSaEhkbGpncDJqUldJYTNhSGVCVFlybVRIWDk5RjRuVWxBaFZ4Q2ZaVXlycFNONWJBNWswaExoNStudFF0SkI3V0pHMEFUR21xSmVpdmFFelZZR00vR0ZrS0swNFJTNmZxTFJ4d1BCYndCZGsrakhCeFlwT0J0ajZsajR2NlhYN0ZrNVdvYVNnYVFyYU5KaXhMdCtuMDYxTmRSalhBaERIREQ5YUhsNTlZUFk5M2tRcndlV0g1YkVmRXg2cllvdUV1cVhPblVBaVBrbWlsWU1ZTG8ybnZIbjVLQlNmcDdVTjdQQ1dBditST2Z4bE4xckxYR1BBMUJQS0NXaTZlSEljb1R3dzNxNDJQWlQwNDY4eFBWZU5iUFVEWkl4NUpaZWF2Z1h3UWtpME5KMUovREJZbGhlbG8rLzRzd29vUmxkUmMreGRNNGhwL2xNVzNJRG5XS1M4ekh5UTRndmZVbmJRbitXdW5sVkkzdTdmdWZLUzkxSEhwWjBab0xUYUtyU0RxQ2Y3T3RqK2dtWUtDaFc3RE9pck51enBMbm4zVktmNDUrOXRJWlQ4SWZNUTVZMDNPaGJicEVZdTI5QXNOWDlNMkVUUFBJMmNOeWw0ZDdTbnE5MWJNb01mOVBYVjh0Mjk2TXVOVWFaaUVXRHBRcjJ3bmp5cmY1c0N0VTM4TjdMUzY3SWtMcDNMaTY5TWp5TWVYenBEZVhFdnJmUURxdTdBN1pzdDJPOWY0bEs4MTJJZEtaV3BBN0x1OTF3NjY3NXFJcm9RSVJsbE9XdUxLK1dJVk1hdkNmMU55dUpiaG11VWpNc0FrLytERU1hWG9vNEpCeS9kTzFpVFhvSG01N3BweGZkem5SWTVucHBnR2pUQWtoRGtiWVBVbUpWWElUbVJ0b0tOb0dNdy83V1FhZ28zbFV5RTB2QlZQTkRKSmJIL1F5L3J1aWp3VnhrbkxGM20xcFJkVkh6WmZocWd5S3hpdmJPUjNkL1Z3OFFYQjJHa3BkS1czOGRCVFI3VnBEaGVoVE1hSDhOSmk3WFRieVhsQWpkcnpqeHNaWkpNWHE3cXNmN2RmaS9xOGpXSEVsZmJJVlhWUTNaQlp3eVl2cFRPT0t2b1kzZ3R3UEROam5KL21kUnlFamZsTDRIMTRZWG8yYVdWaDR6WmFxc1ROc2s4aXVRaUFReVFrM09JUGV6RDBvR2NLQU9rVWJpK3pCRjg2Z0IwZ1ZLRHdLcFRZN0lHVjdTbHB4VUdSZ3c0MTk1dXhmcnlwTUo3a2lZQkJoTytCMUtPL1ZBQ1hlWlcwVlUxZVBOa1NJWFpxeENDZDdJcTZodmxFK0NjWHpyS0lkVzdCaEdxMmRGMVIxdDVZMDQwV2UrNmF6TGxXRFJab3ViSksya0NmaEJrUjA0ZVV4UHJqeEpGeEx0T2I2SGhyTklSVkNnTnhzNk5CamFqendxSXlGdEd2b0szOStnUDZ6b2VjemhTNnBCNjFWTllaVWpaWnhHYkdiei9rNXl4VWY2STM3NG54WE5QbFgzY05MRkVqRHY3UVdKNlNaOTdZa0xibjRDS1ZJN3EyelpkWFZkTEFuQVcrdWVHWTYvOS8vVDE3QmVUNGNPdDBHci9vektLTFRFdFZpZFlrTEVpa2YwU2hxVG1mY0lYcnd3ZUltVlk4U0MwK3hRR3RlRXhyeENmWWYvNlJ1a2VXSmhad1UwT2cvSnNaaVY3TWlJUUJZZWV2b1hqb3F4bkJ0RlFVZ2hZMW85S25IZEY2ZGQyR3ZtV3FYbFV6U1VqaUV4WkhmZEVPemRJU1dEanRJSU1oQnVhV29ORk4vRUpzK3hvbkVzaUI2WWt4ZzFxRWUyUnRRTDBUSkkwMkNqSTNTMHJIR2I5UlR1bUY2WFU4MUZXSkt4UHF2Nm1TOEVpeHpraXdNTnVFVGZsOXlzL3FFdEdYWk5xQi9ScDhncGtIZUNjbFFwdHFzVmRkTjVoNEJPOHl2MVhtN3ZxTEJKRnYzeFpORXJnZG1KOEFjSzFZY1k3eXYyRDNkMW9aV0JtZVJHZThXODN6RnpJSFg1VmhpNm81TkdoSHliK0NwTkd3dVloN3ZsREdkR2pFWHoxbmJaOVBuengxRDRYdmwxNXVpcXp1N0tTbDB4c2FhK1BnbzBMaExtNU0ya29UdkRQQm8xL0hOLzhkeWk3MDVNZ2Z3MmRRQWY2cXNZQnNjcytCWEwzZnRxSlRuSmgyYm5VVS8wTU1nL1VXL3BYVWY1MldtZnFvTW5pZFFjSGlMbWQ1eWswMXhnSUYreFN0cFVWTjh3MGJjNkRabSt1MC95c3hrREJYdjN2b1V6a3c1NHEzdTB1WU5LblkwbU1GK1FUSS9zdmlyLzFGcDFvK3I0bmljdjVvMm1iUmhHcCt2NUxhVU5Tek5wMEx1YStPMXNNUUg5STZVQmxRNDhjVHVyQ1JwZlp1YUdDU1pEN3FnZFhjOTlUSmtPTGFpNW1KZVBJRlE1T09FTE1ZUW1TcURvQU5YRTJZMFF4VFExYW0zajhiQVJpdUxFcUpKbmpzSExOZjIzTE9ENUhFcERwUG9KbXo5bkZITi9WSzRkdFk3eTRnQXpMV2ZzWW41RUtxbUQxZEZUcm1LcmN5aEsvL1ZTWFQ0Mm8vVlZzelZOMlJ1VG56T1ZpN1ljYU40RHVBLzFlMzlHT0lQK3pkb24vWGpxRldrZlV4RHFiN29uajZhdTVtZ202eTBVZkJyYg==`;

async function run() {
    try {
        // Tải tệp .proto và tìm kiếm định nghĩa của Gateserver
        const root = await protobuf.load('src/proto/starrail.proto');
        const Gateserver = root.lookupType('starrail.Gateserver');

        // Giải mã Base64 thành buffer
        const buffer = Buffer.from(base64String, 'base64');

        // Giải mã buffer thành thông điệp Gateserver
        const message = Gateserver.decode(buffer);

        // Chuyển đổi thông điệp thành đối tượng JSON
        const object = Gateserver.toObject(message, {
            longs: String,  // Chuyển đổi các trường kiểu long thành chuỗi
            enums: String,  // Chuyển đổi các trường kiểu enum thành chuỗi
            bytes: String,  // Chuyển đổi các trường kiểu byte thành chuỗi
            defaults: true, // Bao gồm cả giá trị mặc định nếu có
            arrays: true,   // Luôn hiển thị các mảng, ngay cả khi rỗng
            objects: true   // Luôn hiển thị các đối tượng, ngay cả khi rỗng
        });

        console.log(object);
    } catch (err) {
        console.error("Error decoding or parsing the message:", err);
    }
}

run()