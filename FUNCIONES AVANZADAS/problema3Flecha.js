// 3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
// hay que hacer un monitoreo constante, Cree una función de flecha que
// permita calcular la temperatura media de la luna a partir de la
// temperatura máxima y mínima de cada día 



// function SacarPromedio(diamax, diamin){
//     promedio=(diamax+diamin)/2
//     console.log(promedio)
// }
// SacarPromedio(12,52)


let  promediar=()=>{

    let diasmax=[45,95,54,68,45,98,48,35,36]
    let diasmin=[12,18,25,32,21,7,13,32,5]
    let promedioDia1=(diasmax[0]+diasmin[0])/2
    let promedioDia2=(diasmax[1]+diasmin[1])/2
    let promedioDia3=(diasmax[2]+diasmin[2])/2    
    let promedioDia4=(diasmax[3]+diasmin[3])/2
    let promedioDia5=(diasmax[4]+diasmin[4])/2
    let promedioDia6=(diasmax[5]+diasmin[5])/2
    let promedioDia7=(diasmax[6]+diasmin[6])/2
    let promedioDia8=(diasmax[7]+diasmin[7])/2
    let promedioDia9=(diasmax[8]+diasmin[8])/2
    console.log('Temperatura promedio primer dia '+ promedioDia1+'°')
    console.log('Temperatura promedio segundo dia '+ promedioDia2+'°')
    console.log('Temperatura promedio tercer dia '+ promedioDia3+'°')
    console.log('Temperatura promedio cuarto dia '+ promedioDia4+'°')
    console.log('Temperatura promedio quinto dia '+ promedioDia5+'°')
    console.log('Temperatura promedio sexto dia '+ promedioDia6+'°')
    console.log('Temperatura promedio septimo dia '+ promedioDia7+'°')
    console.log('Temperatura promedio octavo dia '+ promedioDia8+'°')
    console.log('Temperatura promedio noveno dia '+ promedioDia9+'°')

  
}
promediar()
