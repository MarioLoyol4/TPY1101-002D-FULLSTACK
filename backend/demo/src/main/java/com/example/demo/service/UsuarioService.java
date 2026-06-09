package com.example.demo.service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public Usuario actualizarUsuario (Long id, Usuario detallesUsuario) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setUsuario(detallesUsuario.getUsuario());
            usuario.setPassword(detallesUsuario.getPassword());
            return usuarioRepository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public void eliminarUsuario(Long id){
        usuarioRepository.deleteById(id);
    }

    public boolean validarLogin(String username, String password) {
        Optional<Usuario> usuarioOp = usuarioRepository.findByUsuario(username);
        return usuarioOp.isPresent() && usuarioOp.get().getPassword().equals(password);
    }
}
