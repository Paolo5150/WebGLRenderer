class UIManager {
    constructor() {

        this.lightDir = vec3.create()
        this.lightDir = [0,-1,-1]

        this.lightDiffuseColor = vec3.create()
        this.lightDiffuseColor = [1,1,1]

        this.lightSpecularColor = vec3.create()
        this.lightSpecularColor = [1,1,1]

        this.dirLightIntensity = 0.1

        //Point light
        this.lightPos = vec3.create()
        this.lightPos = [0,5,0]
        this.pLightIntensity = 1.0

        this.gamma = 0.8
        this.exposure = 2.0
    }

    initialize() {

         $("#dirLightX").val(uiManager.lightDir[0])
         $("#dirLightY").val(uiManager.lightDir[1])
         $("#dirLightZ").val(uiManager.lightDir[2])
         
         $("#lightPosX").val(uiManager.lightPos[0])
         $("#lightPosY").val(uiManager.lightPos[1])
         $("#lightPosZ").val(uiManager.lightPos[2])

         $("#gamma").val(uiManager.gamma )
         $("#exposure").val(uiManager.exposure )


    }
}


let uiManager = new UIManager()
uiManager.initialize()

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : null;
  }

function onLightDirectionChange(e){
    
    if(e === 'x')
        uiManager.lightDir[0] = $("#dirLightX").val()

    if(e === 'y')
        uiManager.lightDir[1] = $("#dirLightY").val()

    if(e === 'z')
        uiManager.lightDir[2] = $("#dirLightZ").val()

}

function onLightPositionChange(e) {
    if(e === 'x')
        uiManager.lightPos[0] = $("#lightPosX").val()

    if(e === 'y')
        uiManager.lightPos[1] = $("#lightPosY").val()

    if(e === 'z')
        uiManager.lightPos[2] = $("#lightPosZ").val()

}

function onLightDiffuseColorChange() {

    var col = $("#lightDifColor").val()
    var rgb = hexToRgb(col)
    uiManager.lightDiffuseColor = [rgb.r, rgb.g, rgb.b]
}

function onLightSpecularColorChange() {

    var col = $("#lightSpecColor").val()
    var rgb = hexToRgb(col)
    uiManager.lightSpecularColor = [rgb.r, rgb.g, rgb.b]
}

function onLightIntensityChange() {
    var i = $("#lightIntensity").val()

    uiManager.dirLightIntensity = i
}

function onPointLightIntensityChange() {
    var i = $("#pointLightIntensity").val()

    uiManager.pLightIntensity = i
}

function onGammaChange(e){
    uiManager.gamma = $("#gamma").val()
}

function onExposureChange(e){
    uiManager.exposure = $("#exposure").val()
}
