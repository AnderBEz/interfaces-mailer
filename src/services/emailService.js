import transporter from "../config/mailer.js";

export const sendAppointmentEmail = async (kind, code,  barcode, name, price_in, price_out, unit, description, presentation) => {
  await transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    subject: "ADICION DE PRODUCTOS AL INVENTARIO",
    html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <!-- Encabezado -->
      <div style="background: linear-gradient(135deg, #6e8efb, #a777e3); padding: 20px; text-align: center; color: white;">
        <h1 style="margin: 0; font-size: 24px;">Nuevo Producto Registrado</h1>
        <p style="margin: 5px 0 0; font-size: 16px;">Inventario Equipo 1</p>
      </div>
      
      
      <div style="padding: 25px; background-color: #f9f9f9;">
        <div style="background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">${name}</h2>
          
          <div style="display: flex; margin-bottom: 15px;">
            <div style="flex: 1;">
              <p style="margin: 5px 0; color: #555;"><strong>Código:</strong> ${code}</p>
              <p style="margin: 5px 0; color: #555;"><strong>IND:</strong> ${kind}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Unidad:</strong> ${unit}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Precio Entrada:</strong> $${price_in}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Precio Salida:</strong> $${price_out}</p>
            </div>
            
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 5px 0; color: #555;"><strong>Descripción:</strong></p>
            <p style="margin: 5px 0; padding: 10px; background-color: #f5f5f5; border-radius: 4px; color: #333;">${description}</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 5px 0; color: #555;"><strong>Presentación:</strong></p>
            <p style="margin: 5px 0; padding: 10px; background-color: #f5f5f5; border-radius: 4px; color: #333;">${presentation}</p>
          </div>
        </div>
        
        
        <div style="text-align: center; background: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <p style="margin: 0 0 10px 0; color: #555; font-weight: bold;">Código de Barras</p>
          <img src="${barcode}" alt="Código de Barras" style="max-width: 100%; height: auto; border: 1px solid #eee;"/>
        </div>
      </div>
      
      
      <div style="background: #333; padding: 15px; text-align: center; color: #aaa; font-size: 12px;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Equipo 1 Inventarios. Todos los derechos reservados.</p>
        <p style="margin: 5px 0 0;">Este es un mensaje automático, por favor no responder.</p>
      </div>
    </div>
    `
  });
};