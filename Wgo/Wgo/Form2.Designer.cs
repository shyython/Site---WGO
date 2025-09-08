namespace Wgo
{
    partial class Form2
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            TxtNomeEmpresa = new TextBox();
            LblNomeEmpresa = new Label();
            LblCpnj = new Label();
            TxtEmailEmpresa = new TextBox();
            LblEmailEmpresa = new Label();
            LblTelefoneEmpresa = new Label();
            LblCep = new Label();
            groupBox1 = new GroupBox();
            MaskNumeroEmpresa = new MaskedTextBox();
            MaskCepEmpresa = new MaskedTextBox();
            MaskTelefoneEmpresa = new MaskedTextBox();
            MaskCnpjEmpresa = new MaskedTextBox();
            LblNumeroEmpresa = new Label();
            groupBox2 = new GroupBox();
            MaskTelefoneContato = new MaskedTextBox();
            lblarea = new Label();
            TxtAreaContato = new TextBox();
            LblTelefoneContato = new Label();
            LblEmailContato = new Label();
            TxtEmailContato = new TextBox();
            LblNomeContato = new Label();
            TxtNomeContato = new TextBox();
            groupBox3 = new GroupBox();
            ComboRamo = new ComboBox();
            ComboPreferencia = new ComboBox();
            LblRamo = new Label();
            LblPreferencia = new Label();
            button1 = new Button();
            groupBox1.SuspendLayout();
            groupBox2.SuspendLayout();
            groupBox3.SuspendLayout();
            SuspendLayout();
            // 
            // TxtNomeEmpresa
            // 
            TxtNomeEmpresa.BorderStyle = BorderStyle.FixedSingle;
            TxtNomeEmpresa.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TxtNomeEmpresa.Location = new Point(23, 51);
            TxtNomeEmpresa.Name = "TxtNomeEmpresa";
            TxtNomeEmpresa.Size = new Size(169, 29);
            TxtNomeEmpresa.TabIndex = 0;
            TxtNomeEmpresa.TextChanged += TxtNomeEmpresa_TextChanged;
            // 
            // LblNomeEmpresa
            // 
            LblNomeEmpresa.AutoSize = true;
            LblNomeEmpresa.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblNomeEmpresa.Location = new Point(23, 29);
            LblNomeEmpresa.Name = "LblNomeEmpresa";
            LblNomeEmpresa.Size = new Size(83, 19);
            LblNomeEmpresa.TabIndex = 1;
            LblNomeEmpresa.Text = "Razão Social";
            // 
            // LblCpnj
            // 
            LblCpnj.AutoSize = true;
            LblCpnj.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblCpnj.Location = new Point(23, 91);
            LblCpnj.Name = "LblCpnj";
            LblCpnj.Size = new Size(40, 19);
            LblCpnj.TabIndex = 3;
            LblCpnj.Text = "CNPJ";
            LblCpnj.Click += label2_Click;
            // 
            // TxtEmailEmpresa
            // 
            TxtEmailEmpresa.BorderStyle = BorderStyle.FixedSingle;
            TxtEmailEmpresa.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TxtEmailEmpresa.Location = new Point(23, 179);
            TxtEmailEmpresa.Name = "TxtEmailEmpresa";
            TxtEmailEmpresa.Size = new Size(169, 29);
            TxtEmailEmpresa.TabIndex = 4;
            // 
            // LblEmailEmpresa
            // 
            LblEmailEmpresa.AutoSize = true;
            LblEmailEmpresa.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblEmailEmpresa.Location = new Point(23, 157);
            LblEmailEmpresa.Name = "LblEmailEmpresa";
            LblEmailEmpresa.Size = new Size(45, 19);
            LblEmailEmpresa.TabIndex = 5;
            LblEmailEmpresa.Text = "Email ";
            // 
            // LblTelefoneEmpresa
            // 
            LblTelefoneEmpresa.AutoSize = true;
            LblTelefoneEmpresa.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblTelefoneEmpresa.Location = new Point(23, 219);
            LblTelefoneEmpresa.Name = "LblTelefoneEmpresa";
            LblTelefoneEmpresa.Size = new Size(59, 19);
            LblTelefoneEmpresa.TabIndex = 7;
            LblTelefoneEmpresa.Text = "Telefone";
            // 
            // LblCep
            // 
            LblCep.AutoSize = true;
            LblCep.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblCep.Location = new Point(23, 281);
            LblCep.Name = "LblCep";
            LblCep.Size = new Size(33, 19);
            LblCep.TabIndex = 9;
            LblCep.Text = "Cep";
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(MaskNumeroEmpresa);
            groupBox1.Controls.Add(MaskCepEmpresa);
            groupBox1.Controls.Add(MaskTelefoneEmpresa);
            groupBox1.Controls.Add(MaskCnpjEmpresa);
            groupBox1.Controls.Add(LblNumeroEmpresa);
            groupBox1.Controls.Add(LblCep);
            groupBox1.Controls.Add(LblTelefoneEmpresa);
            groupBox1.Controls.Add(LblEmailEmpresa);
            groupBox1.Controls.Add(TxtEmailEmpresa);
            groupBox1.Controls.Add(LblCpnj);
            groupBox1.Controls.Add(LblNomeEmpresa);
            groupBox1.Controls.Add(TxtNomeEmpresa);
            groupBox1.Location = new Point(12, 25);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(220, 413);
            groupBox1.TabIndex = 10;
            groupBox1.TabStop = false;
            groupBox1.Text = "Dados da empresa";
            groupBox1.Enter += groupBox1_Enter;
            // 
            // MaskNumeroEmpresa
            // 
            MaskNumeroEmpresa.BorderStyle = BorderStyle.FixedSingle;
            MaskNumeroEmpresa.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            MaskNumeroEmpresa.Location = new Point(23, 361);
            MaskNumeroEmpresa.Mask = "000";
            MaskNumeroEmpresa.Name = "MaskNumeroEmpresa";
            MaskNumeroEmpresa.Size = new Size(169, 29);
            MaskNumeroEmpresa.TabIndex = 15;
            // 
            // MaskCepEmpresa
            // 
            MaskCepEmpresa.BorderStyle = BorderStyle.FixedSingle;
            MaskCepEmpresa.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            MaskCepEmpresa.Location = new Point(23, 303);
            MaskCepEmpresa.Mask = "00000-000";
            MaskCepEmpresa.Name = "MaskCepEmpresa";
            MaskCepEmpresa.Size = new Size(169, 29);
            MaskCepEmpresa.TabIndex = 14;
            // 
            // MaskTelefoneEmpresa
            // 
            MaskTelefoneEmpresa.BorderStyle = BorderStyle.FixedSingle;
            MaskTelefoneEmpresa.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            MaskTelefoneEmpresa.Location = new Point(23, 241);
            MaskTelefoneEmpresa.Mask = "00-00000 0000";
            MaskTelefoneEmpresa.Name = "MaskTelefoneEmpresa";
            MaskTelefoneEmpresa.Size = new Size(169, 29);
            MaskTelefoneEmpresa.TabIndex = 13;
            // 
            // MaskCnpjEmpresa
            // 
            MaskCnpjEmpresa.BorderStyle = BorderStyle.FixedSingle;
            MaskCnpjEmpresa.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            MaskCnpjEmpresa.Location = new Point(23, 113);
            MaskCnpjEmpresa.Mask = "00,000,000/0000-00";
            MaskCnpjEmpresa.Name = "MaskCnpjEmpresa";
            MaskCnpjEmpresa.Size = new Size(169, 29);
            MaskCnpjEmpresa.TabIndex = 12;
            // 
            // LblNumeroEmpresa
            // 
            LblNumeroEmpresa.AutoSize = true;
            LblNumeroEmpresa.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblNumeroEmpresa.Location = new Point(23, 339);
            LblNumeroEmpresa.Name = "LblNumeroEmpresa";
            LblNumeroEmpresa.Size = new Size(59, 19);
            LblNumeroEmpresa.TabIndex = 11;
            LblNumeroEmpresa.Text = "Número";
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(MaskTelefoneContato);
            groupBox2.Controls.Add(lblarea);
            groupBox2.Controls.Add(TxtAreaContato);
            groupBox2.Controls.Add(LblTelefoneContato);
            groupBox2.Controls.Add(LblEmailContato);
            groupBox2.Controls.Add(TxtEmailContato);
            groupBox2.Controls.Add(LblNomeContato);
            groupBox2.Controls.Add(TxtNomeContato);
            groupBox2.Location = new Point(257, 25);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(220, 413);
            groupBox2.TabIndex = 11;
            groupBox2.TabStop = false;
            groupBox2.Text = "Dados para contato";
            // 
            // MaskTelefoneContato
            // 
            MaskTelefoneContato.BorderStyle = BorderStyle.FixedSingle;
            MaskTelefoneContato.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            MaskTelefoneContato.Location = new Point(23, 179);
            MaskTelefoneContato.Mask = "00-00000 0000";
            MaskTelefoneContato.Name = "MaskTelefoneContato";
            MaskTelefoneContato.Size = new Size(169, 29);
            MaskTelefoneContato.TabIndex = 14;
            // 
            // lblarea
            // 
            lblarea.AutoSize = true;
            lblarea.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            lblarea.Location = new Point(23, 219);
            lblarea.Name = "lblarea";
            lblarea.Size = new Size(37, 19);
            lblarea.TabIndex = 7;
            lblarea.Text = "Area";
            // 
            // TxtAreaContato
            // 
            TxtAreaContato.BorderStyle = BorderStyle.FixedSingle;
            TxtAreaContato.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TxtAreaContato.Location = new Point(23, 241);
            TxtAreaContato.Name = "TxtAreaContato";
            TxtAreaContato.Size = new Size(169, 29);
            TxtAreaContato.TabIndex = 6;
            // 
            // LblTelefoneContato
            // 
            LblTelefoneContato.AutoSize = true;
            LblTelefoneContato.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblTelefoneContato.Location = new Point(23, 157);
            LblTelefoneContato.Name = "LblTelefoneContato";
            LblTelefoneContato.Size = new Size(129, 19);
            LblTelefoneContato.TabIndex = 5;
            LblTelefoneContato.Text = "Telefone de contato";
            // 
            // LblEmailContato
            // 
            LblEmailContato.AutoSize = true;
            LblEmailContato.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblEmailContato.Location = new Point(23, 91);
            LblEmailContato.Name = "LblEmailContato";
            LblEmailContato.Size = new Size(111, 19);
            LblEmailContato.TabIndex = 3;
            LblEmailContato.Text = "Email de contato";
            // 
            // TxtEmailContato
            // 
            TxtEmailContato.BorderStyle = BorderStyle.FixedSingle;
            TxtEmailContato.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TxtEmailContato.Location = new Point(23, 113);
            TxtEmailContato.Name = "TxtEmailContato";
            TxtEmailContato.Size = new Size(169, 29);
            TxtEmailContato.TabIndex = 2;
            // 
            // LblNomeContato
            // 
            LblNomeContato.AutoSize = true;
            LblNomeContato.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblNomeContato.Location = new Point(23, 29);
            LblNomeContato.Name = "LblNomeContato";
            LblNomeContato.Size = new Size(128, 19);
            LblNomeContato.TabIndex = 1;
            LblNomeContato.Text = "Nome para contato";
            // 
            // TxtNomeContato
            // 
            TxtNomeContato.BorderStyle = BorderStyle.FixedSingle;
            TxtNomeContato.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            TxtNomeContato.Location = new Point(23, 51);
            TxtNomeContato.Name = "TxtNomeContato";
            TxtNomeContato.Size = new Size(169, 29);
            TxtNomeContato.TabIndex = 0;
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(ComboRamo);
            groupBox3.Controls.Add(ComboPreferencia);
            groupBox3.Controls.Add(LblRamo);
            groupBox3.Controls.Add(LblPreferencia);
            groupBox3.Location = new Point(493, 25);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(220, 413);
            groupBox3.TabIndex = 12;
            groupBox3.TabStop = false;
            groupBox3.Text = "Preferencia";
            // 
            // ComboRamo
            // 
            ComboRamo.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            ComboRamo.FormattingEnabled = true;
            ComboRamo.Location = new Point(23, 113);
            ComboRamo.Name = "ComboRamo";
            ComboRamo.Size = new Size(169, 29);
            ComboRamo.TabIndex = 5;
            ComboRamo.Text = "Ramo";
            // 
            // ComboPreferencia
            // 
            ComboPreferencia.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            ComboPreferencia.FormattingEnabled = true;
            ComboPreferencia.Items.AddRange(new object[] { "Contato por dados empresa", "Contato por dados de colaborador" });
            ComboPreferencia.Location = new Point(23, 50);
            ComboPreferencia.Name = "ComboPreferencia";
            ComboPreferencia.Size = new Size(169, 29);
            ComboPreferencia.TabIndex = 4;
            // 
            // LblRamo
            // 
            LblRamo.AutoSize = true;
            LblRamo.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblRamo.Location = new Point(23, 91);
            LblRamo.Name = "LblRamo";
            LblRamo.Size = new Size(44, 19);
            LblRamo.TabIndex = 3;
            LblRamo.Text = "Ramo";
            LblRamo.Click += label14_Click;
            // 
            // LblPreferencia
            // 
            LblPreferencia.AutoSize = true;
            LblPreferencia.Font = new Font("Segoe UI", 10F, FontStyle.Regular, GraphicsUnit.Point);
            LblPreferencia.Location = new Point(23, 29);
            LblPreferencia.Name = "LblPreferencia";
            LblPreferencia.Size = new Size(146, 19);
            LblPreferencia.TabIndex = 1;
            LblPreferencia.Text = "Preferência de contato";
            // 
            // button1
            // 
            button1.BackColor = Color.FromArgb(255, 154, 105);
            button1.FlatStyle = FlatStyle.Popup;
            button1.Font = new Font("Segoe UI", 14.25F, FontStyle.Bold, GraphicsUnit.Point);
            button1.ForeColor = Color.White;
            button1.Location = new Point(280, 445);
            button1.Name = "button1";
            button1.Size = new Size(185, 46);
            button1.TabIndex = 13;
            button1.Text = "Cadastrar";
            button1.UseVisualStyleBackColor = false;
            button1.Click += button1_Click;
            // 
            // Form2
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 503);
            Controls.Add(button1);
            Controls.Add(groupBox3);
            Controls.Add(groupBox2);
            Controls.Add(groupBox1);
            Name = "Form2";
            Text = "Form2";
            Load += Form2_Load;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            groupBox3.ResumeLayout(false);
            groupBox3.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private TextBox TxtNomeEmpresa;
        private Label LblNomeEmpresa;
        private TextBox textBox2;
        private Label LblCpnj;
        private TextBox TxtEmailEmpresa;
        private Label LblEmailEmpresa;
        private TextBox textBox6;
        private Label LblTelefoneEmpresa;
        private TextBox textBox5;
        private Label LblCep;
        private GroupBox groupBox1;
        private GroupBox groupBox2;
        private Label lblarea;
        private TextBox TxtAreaContato;
        private Label LblTelefoneContato;
        private TextBox textBox8;
        private Label LblEmailContato;
        private TextBox TxtEmailContato;
        private Label LblNomeContato;
        private TextBox TxtNomeContato;
        private GroupBox groupBox3;
        private Label label11;
        private TextBox textBox11;
        private Label label12;
        private TextBox textBox12;
        private Label label13;
        private TextBox textBox13;
        private Label LblRamo;
        private TextBox textBox14;
        private Label LblPreferencia;
        private TextBox textBox15;
        private Label LblNumeroEmpresa;
        private MaskedTextBox MaskNumeroEmpresa;
        private MaskedTextBox MaskCepEmpresa;
        private MaskedTextBox MaskTelefoneEmpresa;
        private MaskedTextBox MaskCnpjEmpresa;
        private MaskedTextBox MaskTelefoneContato;
        private ComboBox ComboRamo;
        private ComboBox ComboPreferencia;
        private Button button1;
        private TextBox textBox16;
    }
}